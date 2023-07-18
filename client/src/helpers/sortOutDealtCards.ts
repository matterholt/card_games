import { DealtCard } from "../types/types";

function sortOutDealtCards(dealtCards: DealtCard[], numberOfPlayers: number) {
  let activeContainer = 0;
  // eslint-disable-next-line prefer-spread
  const container = Array.apply(null, Array(numberOfPlayers)).map(function () {
    return [];
  });

  // CHANGE TO RECURSION, MIGHT BE BETTER
  for (let i = 0; i < dealtCards.length; i++) {
    const currentValue = dealtCards[i];
    container[activeContainer].push(currentValue);

    if (activeContainer == container.length - 1) {
      activeContainer = 0;
      continue;
    }
    activeContainer++;
  }

  const [dealer, ...otherSetOfCards] = container;

  const players = Object.assign({}, otherSetOfCards);

  console.log("SORT", container);
  console.log("SORT", { dealer, players });

  return { dealer, players };
}

export { sortOutDealtCards };
