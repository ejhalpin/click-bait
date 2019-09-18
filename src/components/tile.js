import React from "react";
import "../assets/css/tile.css";

const Tile = ({ gridArea, img, handleClick, index, id }) => {
  return (
    <div className={gridArea}>
      <img
        src={require("../assets/img/" + img)}
        className="tile-img"
        alt={img}
        onClick={() => {
          handleClick(id);
        }}
      />
    </div>
  );
};

export default Tile;
