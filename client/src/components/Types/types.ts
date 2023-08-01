export interface CardType {
  code: string;
  suit: string;
  value: string;
  image: string;
}

// TODO this doesn't feal right need to look into
export interface CardInHand {
  dealtCards: {
    dealer: CardType[];
    players: CardType[];
  };
}

export interface CardDeckId {
  deckID: string;
}
export interface CardDeckCount {
  remainingCards: number;
}
