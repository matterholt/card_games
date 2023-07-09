import React from "react";
import { PresentationBlackJack } from "../components/black_jack";
import useFetch from "../hooks/useFetch";

// set up game container,
// react use context?

const numberOfPlayers = 2;
const cardsDealOut = 2 * numberOfPlayers;

function BlackJackGame() {
  const { fetchedData, status, sending } = useFetch();
  React.useEffect(() => {
    console.log({ fetchedData, status, sending });
  }, [fetchedData, sending, status]);

  // Intail

  if (status === "waiting") {
    return (
      <div>
        waiting for action
        <button onClick={() => console.log("change state")}>DEAL</button>
      </div>
    );
  }

  return <PresentationBlackJack />;
}

export default BlackJackGame;
