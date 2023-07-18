import React from "react";
import { PresentationBlackJack } from "../components/black_jack";

import { useFetch } from "../hooks/useFetch";
const NUMBER_DELT = "4";

// set up game container,
// react use context?

// const numberOfPlayers = 2;
// const cardsDealOut = 2 * numberOfPlayers;

// let options = { deck: "new", cardCount: 2 };

function BlackJackGame() {
  const [gameSetup, callForCard] = useFetch(
    `https://www.deckofcardsapi.com/api/deck/new/draw/?count=${NUMBER_DELT}`,
    { cardPerPlayer: 2 }
  );

  function requestAnotherCard(deckId, numbOfCard, playerKey) {
    callForCard(
      `https://www.deckofcardsapi.com/api/deck/${deckId}/draw/?count=${numbOfCard}`
    );
  }
  // create context
  // or use

  // const [dealer, players] = gameSetup?.data?.cards;

  if (gameSetup.status === "loading") {
    return <div>LOADING</div>;
  }
  if (gameSetup.error) {
    return <div>error</div>;
  }

  // return <PresentationBlackJack />;
  return <TEMPPRES dealtCards={gameSetup.data?.cards} />;
}

const TEMPPRES = (dealtCards) => {
  const { dealer, players } = dealtCards;

  return (
    <div>
      <p> DEALERS HADN{JSON.stringify(dealer)}</p>
      <p> PLAYERS HADN{JSON.stringify(players)}</p>
    </div>
  );
};

export default BlackJackGame;
