import styleCard from "./played_cards.module.css";
import React from "react";

const joinClass = (arg: string[]) => arg.join(" ");

interface PlayedCards {
  position: string;
  children: React.ReactNode;
}

const CurrentPlayedCards = ({ position, children }: PlayedCards) => {
  return (
    <div
      className={joinClass([styleCard[position], styleCard.cards_container])}
    >
      {children}
    </div>
  );
};

export default CurrentPlayedCards;
