function sortOutDealtCards(dealtCards, numberOfPlayers) {
  let activeContainer = 0;
  // eslint-disable-next-line prefer-spread
  const container = Array.apply(null, Array(numberOfPlayers)).map(function () {
    return [];
  });
  for (let i = 0; i < dealtCards.length; i++) {
    const currentWorking = container[activeContainer];
    currentWorking.push(dealtCards[i]);

    if (activeContainer == container.length - 1) {
      activeContainer = 0;
      continue;
    }
    activeContainer++;
  }
  return container;
}

export { sortOutDealtCards };
