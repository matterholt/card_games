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

  const deckID = gameSetup.deck_id;
  const remainingInDeck = gameSetup.remaining;
  // create context
  // or use

  // const [dealer, players] = gameSetup?.data?.cards;
  React.useEffect(() => {
    console.log(gameSetup);
  });

  if (gameSetup.status === "idle") {
    return <div>Deal</div>;
  }
  if (gameSetup.status === "loading") {
    return <div>LOADING</div>;
  }
  if (gameSetup.status === "error") {
    return <div>error</div>;
  }
  if (remainingInDeck === 0) {
    return <p> ran out of cards</p>;
  }
  return (
    <PresentationBlackJack dealtCards={gameSetup.data?.cards} deckID={deckID} />
  );
}

export default BlackJackGame;
