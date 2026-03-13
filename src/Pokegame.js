import React from "react";
import Pokedex from "./Pokedex";

function getRandomHands(pokemon) {
  let hand1 = [];
  let hand2 = [...pokemon];
  while (hand1.length < hand2.length) {
    let randIdx = Math.floor(Math.random() * hand2.length);
    hand1.push(hand2.splice(randIdx, 1)[0]);
  }
  return [hand1, hand2];
}

function getTotalExp(hand) {
  return hand.reduce((exp, p) => exp + p.base_experience, 0);
}

function Pokegame() {
  const defaultPokemon = [
    { id: 4, name: "Charmander", type: "fire", base_experience: 62 },
    { id: 7, name: "Squirtle", type: "water", base_experience: 63 },
    { id: 11, name: "Metapod", type: "bug", base_experience: 72 },
    { id: 12, name: "Butterfree", type: "flying", base_experience: 178 },
    { id: 25, name: "Pikachu", type: "electric", base_experience: 112 },
    { id: 39, name: "Jigglypuff", type: "normal", base_experience: 95 },
    { id: 94, name: "Gengar", type: "poison", base_experience: 225 },
    { id: 133, name: "Eevee", type: "normal", base_experience: 65 },
  ];
  const [hand1, hand2] = getRandomHands(defaultPokemon);
  const exp1 = getTotalExp(hand1);
  const exp2 = getTotalExp(hand2);
  const isWinner1 = exp1 > exp2;
  const isWinner2 = exp2 > exp1;

  return (
    <div className="Pokegame">
      <Pokedex pokemon={hand1} totalExp={exp1} isWinner={isWinner1} />
      <Pokedex pokemon={hand2} totalExp={exp2} isWinner={isWinner2} />
    </div>
  );
}

export default Pokegame;
