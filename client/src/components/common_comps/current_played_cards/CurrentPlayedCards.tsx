import React from "react";
import styleCard from "./played_cards.module.css";

interface DealtCards {
  code: string;
  suit: string;
  value: string;
  image: string;
}
// Single hand of cards, accept any amount of cards,
// there is 3 states

// just deck face down
// dealers hand  -> blackjack == 1 hidden, 1 shown
// players hand  -> blackjack == 2 shown, and able to add to.

const Cards = ({ dealtCards }: { dealtCards: DealtCards[] }) => {
  {
    dealtCards.map((x) => (
      <div key={x.code}>
        <img style={{ aspectRatio: "3/4", width: "100px" }} src={x.image} />
        <h3>
          {x.suit} <br /> of {x.value}
        </h3>
      </div>
    ));
  }
};

const CurrentPlayedCards = ({
  player,
}: {
  player: string;
  dealtCards?: DealtCards[];
}) => {
  return <div className={styleCard[player]}>{player} cards</div>;
};

export default CurrentPlayedCards;
