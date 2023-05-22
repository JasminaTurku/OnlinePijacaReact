import React from "react";
import style from "./Slika.module.css";
import Select from "../select/SelectPerent.js";
import slika from "../../assets/homeImage/4.jpg";
function Slika({ className }) {
  return (
    <div
      className={style.minicontainerSlika}
      style={{ backgroundImage: `url(${slika})` }}
    >
      <div className={style.select}>
        <Select />
      </div>
    </div>
  );
}
export default Slika;
