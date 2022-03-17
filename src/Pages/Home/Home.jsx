import React from "react";
import { Header } from "../../Components/Header/header";
import { TitleFilter } from "../../Components/TitleFilter/TitleFilter";
import { Graphics } from "./../../Components/Graphics/Graphics";

export const Home = () => {
  return (
    <>
      <Header />
      <TitleFilter title={"Dashboard"} caption={"Desafio frontend"} />
      <Graphics />
    </>
  );
};
