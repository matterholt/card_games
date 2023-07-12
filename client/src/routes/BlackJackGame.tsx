import React from "react";
import { PresentationBlackJack } from "../components/black_jack";

import { useUrlFetch } from "../hooks/useUrlFetch";

// set up game container,
// react use context?

// const numberOfPlayers = 2;
// const cardsDealOut = 2 * numberOfPlayers;

// let options = { deck: "new", cardCount: 2 };
const _URL = `https://deckofcardsapi.com/api/deck/new/draw/?count=2`;

function BlackJackGame() {
  const state = useUrlFetch(_URL);

  React.useEffect(() => {
    console.log(state);
  });

  return <PresentationBlackJack />;
}

export default BlackJackGame;
