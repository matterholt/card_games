import styleCard from "./played_cards.module.css";
import React from "react";
import { joinClass } from "@/helpers/cssHelpers";

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
