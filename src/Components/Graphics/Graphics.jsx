import React from "react";

export const Graphics = () => {
  return (
    <div style={{ width: "vw",display: "flex", justifyContent:"space-around" }}>
      <div style={{ width: "600px", height: "600px", backgroundColor: "blue" }}>
        Grafico Barra
      </div>
      <div style={{ width: "600px", height: "600px", backgroundColor: "red" }}>
        Grafico Scatter
      </div>
    </div>
  );
};
