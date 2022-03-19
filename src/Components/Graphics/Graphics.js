import React from "react";
import GraphicBar from "../../Services/GraphicBar/GraphicBar";
import GraphicScatter from "../../Services/GraphicScatter/GraphicScatter";
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
        <ContainerInfos>
          <p>Barras</p>
          <p>Menu S</p>
        </ContainerInfos>
        <ViweGraphics1>
          <GraphicBar />
        </ViweGraphics1>
      </CardGraphics>
      <CardGraphics>
        <ContainerInfos>
          <p>Barras</p>
          <p>Menu S</p>
        </ContainerInfos>
        <ViweGraphics2>
          <GraphicScatter />
        </ViweGraphics2>
      </CardGraphics>
    </ContainerGraphics>
  );
}
