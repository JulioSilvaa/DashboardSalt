import React from "react";
import icon from "../../assets/IconFilter.svg";
import { ContainerSection, Title, Caption } from "./Style";

export const TitleFilter = ({ title, caption }) => {
  return (
    <ContainerSection>
      <div>
        <Title>{title}</Title>
        <Caption>{caption}</Caption>
      </div>
      <div>
        <img src={icon} alt="Botão de filtrar" />
      </div>
    </ContainerSection>
  );
};
