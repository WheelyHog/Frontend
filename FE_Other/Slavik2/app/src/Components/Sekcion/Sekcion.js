import React from "react";
import s from "./Sekcion.module.css"


function Sekcion({ title, text, image, background }) {
  return (
    <div className={s.sekcion} style={{ background: background }}>
      <div className={s.left}>
        <h2>{title}</h2>
        <p>{text}</p>
      </div>
      <div className={s.right}>
        <img src={image} />
      </div>
    </div>
  );
}

export default Sekcion;
