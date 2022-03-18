import React from "react";
import { GraphicBar } from "../../Services/GraphicBar/GraphicBar";
import { GraphicScatter } from "../../Services/GraphicScatter/GraphicScatter";

export const Graphics = () => {
  return (
    <div
      style={{
        width: "vw",
        display: "flex",
        justifyContent: "space-around",
        flexWrap: "wrap",
      }}
    >
      <div
        style={{ maxWidth: "600px", height: "600px", backgroundColor: "blue" }}
      >
        <GraphicBar />
      </div>
      <div
        style={{ maxWidth: "600px", height: "600px", backgroundColor: "red" }}
      >
        <GraphicScatter />
      </div>
    </div>
  );
};
