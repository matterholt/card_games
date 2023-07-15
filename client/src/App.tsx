import { useEffect, useReducer, useRef, useState } from "react";

import { Link } from "./components/common_comps";

import "./index.css";

import { useFetch } from "./hooks/useFetch";

const Player = ({
  title,
  callForCardOne,
  DELT,
}: {
  title: any;
  deckId: any;
  DELT: any;
}) => {
  return (
    <div style={{ background: "white", width: "100vw", height: "50vh" }}>
      <h2>
        {title} <button onClick={() => callForCardOne()}>get another</button>
      </h2>
      {JSON.stringify(DELT)}
    </div>
  );
};

const NUMBER_DELT = "4";

export default function App() {
  const [gameSetup, callForCard] = useFetch(
    `https://www.deckofcardsapi.com/api/deck/new/draw/?count=${NUMBER_DELT}`
  );

  // const dealerHand = gameSetup.slice(0, Math.ceil(gameSetup.length / 2));

  function requestAnotherCard(deckId, numbOfCard) {
    callForCard(
      `https://www.deckofcardsapi.com/api/deck/${deckId}/draw/?count=${numbOfCard}`
    );
  }
  return (
    <div style={{ display: "flex", flexFlow: "column", width: "100vw" }}>
      <Link title="black jack" link="./table/blackjack" />
      <Link title="war" link="" />
      <Link title="other games" link="" />
      {JSON.stringify(gameSetup)}

      {gameSetup.status === "success" ? (
        <Player
          title="Player One"
          deckId={gameSetup?.data?.deck_id}
          callForCardOne={() => requestAnotherCard(gameSetup?.data?.deck_id, 1)}
          DELT={[gameSetup?.data?.cards[0], gameSetup?.data?.cards[1]]}
        />
      ) : null}
    </div>
  );
}
