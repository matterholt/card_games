import { useEffect, useReducer, useRef, useState } from "react";
import { Link } from "./components/common_comps";
import "./index.css";
import { useFetch } from "./hooks/useFetch";

const NUMBER_DELT = "4";

const DeckTable = ({ dealCards }: any) => {
  const tifOptions = Object.keys(dealCards).map((key) => (
    <p style={{ background: "white", margin: "10px" }} key={`player-${key}`}>
      {JSON.stringify(dealCards[key])}
    </p>
  ));

  return tifOptions;
};

export default function App() {
  const [gameSetup, callForCard] = useFetch(
    `https://www.deckofcardsapi.com/api/deck/new/draw/?count=${NUMBER_DELT}`
  );

  function requestAnotherCard(deckId, numbOfCard) {
    callForCard(
      `https://www.deckofcardsapi.com/api/deck/${deckId}/draw/?count=${numbOfCard}`
    );
  }

  // const CardsInPlay = Object.keys();
  return (
    <div style={{ display: "flex", flexFlow: "column", width: "100vw" }}>
      <Link title="black jack" link="./table/blackjack" />
      <Link title="war" link="" />
      <Link title="other games" link="" />

      {gameSetup.status === "success" ? (
        <DeckTable dealCards={gameSetup.data.cards.players} />
      ) : null}
    </div>
  );
}
