import React from "react";
import GraphicBar from "../../Services/GraphicBar/GraphicBar";
import GraphicScatter from "../../Services/GraphicScatter/GraphicScatter";
import iconInfo from "../../assets/iconInfo.svg";
import {
  ContainerGraphics,
  CardGraphics,
  ViweGraphics1,
  ViweGraphics2,
  ContainerInfos,
} from "./style";

export default function Graphics() {
  return (
    <ContainerGraphics>
      <CardGraphics>
        <ViweGraphics1>
          <ContainerInfos>
            <p>Barras</p>
            <p>
              <img src={iconInfo} alt="icone de informações" />
            </p>
          </ContainerInfos>
          <GraphicBar />
        </ViweGraphics1>
      </CardGraphics>
      <CardGraphics>
        <ViweGraphics2>
          <ContainerInfos>
            <p>Scatter</p>
            <p>
              <img src={iconInfo} alt="icone de informações" />
            </p>
          </ContainerInfos>
          <GraphicScatter />
        </ViweGraphics2>
      </CardGraphics>
    </ContainerGraphics>
  );
}
