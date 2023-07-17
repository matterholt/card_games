import { DealtCard } from "../types/types";

function sortOutDealtCards(dealtCards: DealtCard[], numberOfPlayers: number) {
  let activeContainer = 0;
  // eslint-disable-next-line prefer-spread
  let container = Array.apply(null, Array(numberOfPlayers)).map(function () {
    return [];
  });

  for (let i = 0; i < dealtCards.length; i++) {
    // const currentWorking = ;
    container[activeContainer].push(dealtCards[i]);
    // currentWorking.push(dealtCards[i]);

    if (activeContainer == container.length - 1) {
      activeContainer = 0;
      continue;
    }
    activeContainer++;
  }

  // change the player array into a Map
  //
  console.log("RESULTS ", container);
  const [dealer, ...otherSetOfCards] = container;

  const players = Object.assign({}, otherSetOfCards);

  return { dealer, players };
}

export { sortOutDealtCards };
