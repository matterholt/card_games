import styleCard from "./played_cards.module.css";
import React from "react";
import { joinCssClass } from "@/helpers/cssHelpers";

interface PlayedCards {
  position: string;
  children: React.ReactNode;
}

const CurrentPlayedCards = ({ position, children }: PlayedCards) => {
  return (
    <div
      className={joinCssClass([styleCard[position], styleCard.cards_container])}
    >
      {children}
    </div>
  );
};

export default CurrentPlayedCards;
