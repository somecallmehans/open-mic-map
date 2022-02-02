import React from "react";
import Map from "./Map";

export default function Home() {
  return (
    <div>
      <h1>This is the home screen!</h1>
      <div style={{ width: 1000 }}>
        <Map />
      </div>
    </div>
  );
}
