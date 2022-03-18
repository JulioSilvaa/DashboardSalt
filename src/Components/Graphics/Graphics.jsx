import React from "react";
import GraphicBar from './../../Services/GraphicBar/GraphicBar';
import GraphicScatter from './../../Services/GraphicScatter/GraphicScatter';




export default function Graphics() {
  return (
    <div
      style={{        
        display: "flex",
        justifyContent: "space-around",
        flexWrap: "wrap",
      }}
    >
      <div
        style={{
          width: "680px",
          height: "359px",
          backgroundColor: "white",
          borderRadius: "10px",
        }}
      >
        <div
          style={{
            maxWidth: "600px",
            height: "290px",
            
          }}
        >
          <p>Barras</p>
          <p>Menu S</p>
          <GraphicBar />
        </div>
      </div>
      <div
        style={{
          width: "680px",
          height: "359px",
          backgroundColor: "white",
          borderRadius: "10px",
        }}
      >
        <div style={{ maxWidth: "600px", height: "290px" }}>
          <p>Barras</p>
          <p>Menu S</p>
          <GraphicScatter />
        </div>
      </div>
    </div>
  );
}
