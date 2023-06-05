import React from "react";
import Header from "./Components/Header/Header";
import dino from "./images/dino.png"
import Sekcion from "./Components/Sekcion/Sekcion";

function App() {
  const velosar = {
    title: 'Веломастерская “Велозар”',
    text: "Мы, мастера веломастерской «Велозар», как раз те самые счастливые люди, которые смогли превратить свое увлечение и хобби в профессию. Мы сами любим кататься и хотим чтобы Ваш двухколесный друг приносил Вам только радость и удовольствие от езды.",
    image: dino,
    background: "#F4F9E2"
  };

  return (
    <div>
      <Header />
      <Sekcion {...velosar} />
    </div>
  );
}

export default App;
