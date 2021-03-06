import { Link } from "react-router-dom";
import React, { useState, useEffect } from "react";
import ReactMapGL, { Marker, Popup } from "react-map-gl";
import regionData from "../data/region-locations.js";
import mapImg from "../maps-and-flags.png";

function Map() {
  const [viewport, setViewport] = useState({
    latitude: 11.5024,
    longitude: 17.7578,
    width: "75vw",
    height: "75vh",
    zoom: 1.3
  });

  const [location, setLocation] = useState({});

  const [selectedRegion, setSelectedRegion] = useState("");

  useEffect(() => {
    fetchRegion();
  }, [selectedRegion]);

  let fetchRegion = () => {
    if (selectedRegion) {
      fetch(`http://localhost:3001/regions/${selectedRegion.id}`)
        .then(res => res.json())
        .then(json => {
          return setLocation(json);
        });
    }
  };

  useEffect(() => {
   const listener = e => {
     if (e.key === "Escape") {
       setSelectedRegion(null);
     }
   };
   window.addEventListener("keydown", listener);

   return () => {
     window.removeEventListener("keydown", listener);
   };
 }, []);

  return (
    <div>
      <div className="map">
          <ReactMapGL
            {...viewport}
            className="react-map"
            mapboxApiAccessToken={'pk.eyJ1IjoiYWxpeWFsZXdpczUiLCJhIjoiY2swOHNoYXZlMDFlMTNucXJ6cWxzMTV6ZCJ9.-5DNVakBMK4sh-uiRuBdEA'}
            mapStyle="mapbox://styles/aliyalewis5/cjzvietnc16z11cmtkqt64ce0"
            onViewportChange={viewport => {
              setViewport(viewport);
            }}
          >
            {regionData.regions.map(region => (
              <Marker
                className="marker"
                key={region.id}
                latitude={region.latitude}
                longitude={region.longitude}
              >
                <button
                  className="marker-btn"
                  onClick={e => {
                    e.preventDefault();
                    setSelectedRegion(region);
                  }}
                >
                  <img src={mapImg} alt="Globe Icon" />
                </button>
              </Marker>
            ))}

            {selectedRegion ? (
              <Popup
                latitude={selectedRegion.latitude}
                longitude={selectedRegion.longitude} className="popup">
                <h3 className="header-three">{location.name}</h3>
                <p className="p-tag">{location ? location.desc : null}</p>
                <h4 className="header-four">Countries within {selectedRegion.name}:</h4>
                <p className="p-tag">{location ? location.countries : null}</p>
                <Link to={'/animals/' + selectedRegion.id} className="map-link">  Learn more about animals in {selectedRegion.name}  </Link>
              </Popup>
            ) : null}
          </ReactMapGL>
      </div>
    </div>
  );
}

export default Map;
