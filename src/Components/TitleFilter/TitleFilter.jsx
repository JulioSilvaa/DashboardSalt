import React from "react";
import { ContainerSection } from "./Style";

export const TitleFilter = ({ title, caption }) => {
  return (
    <ContainerSection>
      <div>
        <h3>{title}</h3>
        <p>{caption}d</p>
      </div>
      <div>
        <button type="submit">filtrar</button>
      </div>
    </ContainerSection>
  );
};
