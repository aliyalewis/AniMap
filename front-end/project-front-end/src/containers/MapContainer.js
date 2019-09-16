import React from "react";
import Map from "../components/Map";
import MainHeader from "../components/MainHeader";
import Title from "../components/Title";

function MapContainer() {

  return (
    <div>
      <MainHeader />
      <div className="map-container">
        <Map />
      </div>
      <Title />
    </div>
  )

}

export default MapContainer;
