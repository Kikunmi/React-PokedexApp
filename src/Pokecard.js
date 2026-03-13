import React from "react";
import "./Pokecard.css";

const POKE_API = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/";

function Pokecard({ id, name, type, base_experience }) {
  const imgSrc = `${POKE_API}${id}.png`;
  return (
    <div className="Pokecard">
      <h3 className="Pokecard-title">{name}</h3>
      <img src={imgSrc} alt={name} className="Pokecard-img" />
      <div>Type: {type}</div>
      <div>EXP: {base_experience}</div>
    </div>
  );
}

export default Pokecard;
