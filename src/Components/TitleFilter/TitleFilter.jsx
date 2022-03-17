import React from "react";

export const TitleFilter = ({ title, caption }) => {
  return (
    <div>
      <>
        <div>
          <h3>{title}</h3>
          <p>{caption}d</p>
        </div>
        <div>
          <button type="submit">filtrar</button>
        </div>
      </>
    </div>
  );
};
