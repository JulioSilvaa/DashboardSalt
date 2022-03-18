import React from "react";
import icon from "../../assets/IconFilter.svg";
import { ContainerSection } from "./Style";

export const TitleFilter = ({ title, caption }) => {

  return (
    <ContainerSection>
      <div>
        <h3>{title}</h3>
        <p>{caption}d</p>
      </div>
      <div>
        <img src={icon} alt="Botão de filtrar" />
      </div>
    </ContainerSection>
  );
};
