import React from "react";
import "../assets/css/tile.css";

const Tile = ({ gridArea, img }) => {
  console.log(img);
  return (
    <div className={gridArea}>
      <img src={require("../assets/img/" + img)} className="tile-img" alt={img} />
    </div>
  );
};

export default Tile;
