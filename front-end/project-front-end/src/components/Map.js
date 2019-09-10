import { Link } from "react-router-dom";
import React, { useState, useEffect } from "react";
import ReactMapGL, { Marker, Popup } from "react-map-gl";
import regionData from "../data/region-locations.js";
import mapImg from "../maps-and-flags.png";
import MainHeader from "./MainHeader"

function Map() {
  const [viewport, setViewport] = useState({
    latitude: 11.5024,
    longitude: 17.7578,
    width: "100vw",
    height: "100vh",
    zoom: 1.9
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
    <MainHeader />
      <div className="map">
          <ReactMapGL
            {...viewport}
            mapboxApiAccessToken={'pk.eyJ1IjoiYWxpeWFsZXdpczUiLCJhIjoiY2swOHNoYXZlMDFlMTNucXJ6cWxzMTV6ZCJ9.-5DNVakBMK4sh-uiRuBdEA'}
            mapStyle="mapbox://styles/aliyalewis5/cjzvietnc16z11cmtkqt64ce0"
            onViewportChange={viewport => {
              setViewport(viewport);
            }}
          >
            {regionData.regions.map(region => (
              <Marker
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
                longitude={selectedRegion.longitude}>
                <h3>{location.name}</h3>
                <p>{location ? location.desc : null}</p>
                <h4>Countries within {selectedRegion.name}:</h4>
                <p>{location ? location.countries : null}</p>
                <Link to={'/animals/' + selectedRegion.id}>Learn more about {selectedRegion.name} animals</Link>
              </Popup>
            ) : null}
          </ReactMapGL>
      </div>
    </div>
  );
}

export default Map;
