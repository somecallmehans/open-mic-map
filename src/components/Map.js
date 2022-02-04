import React, { useState, useCallback } from "react";
import {
  GoogleMap,
  InfoWindow,
  LoadScript,
  Marker,
} from "@react-google-maps/api";

export default function Map() {
  const [selected, setSelected] = useState({});

  const onSelect = (item) => {
    setSelected(item);
  };

  const mapStyles = {
    height: "80vh",
    width: "100%",
  };

  //Sotuh/West are denoted with negative numbers
  //This is Pittsburgh
  const defaultCenter = {
    lat: 40.3851,
    lng: -79.9959,
  };

  const locations = [
    {
      name: "Andy Warhol Museum",
      location: {
        lat: 40.4484,
        lng: -80.0025,
      },
    },
    {
      name: "Carnegie Science Center",
      location: {
        lat: 40.4457,
        lng: -80.0182,
      },
    },
    {
      name: "Thunderbird Cafe",
      location: {
        lat: 40.4694154,
        lng: -79.9616109,
      },
    },
    {
      name: "Uncommon Grounds",
      location: {
        lat: 40.616876,
        lng: -80.246794,
      },
    },
    {
      name: "Thursday's Bar & Grill",
      location: {
        lat: 40.697888,
        lng: -80.294871,
      },
    },
  ];

  return (
    <LoadScript googleMapsApiKey={process.env.REACT_APP_API_KEY}>
      <GoogleMap mapContainerStyle={mapStyles} zoom={10} center={defaultCenter}>
        {locations.map((item) => {
          return (
            <Marker
              key={item.name}
              position={item.location}
              onClick={() => onSelect(item)}
            />
          );
        })}
        {selected.location && (
          <InfoWindow
            position={selected.location}
            clickable={true}
            onCloseClick={() => setSelected({})}
          >
            <p>{selected.name}</p>
          </InfoWindow>
        )}
      </GoogleMap>
    </LoadScript>
  );
}
