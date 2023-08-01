import { CardType } from "../../Types/types";
import styleCard from "./dealtcards.module.css";
import { Card } from "..";

const CardText = ({ suit, value }: { suit: string; value: string }) => (
  <p className={styleCard.cardValue}>
    {suit} <br /> of {value}
  </p>
);

const gameState = "inPlay";

const DealtCards = ({
  cardInPlay,
  cardDealtTo,
}: {
  cardInPlay: CardType[];
  cardDealtTo: string;
}) => {
  const cardsAreStillHidden =
    gameState === "inPlay" && cardDealtTo === "dealer";

  return (
    <div className={styleCard.cardsOnTable}>
      {cardInPlay.map((x, indx) => (
        <Card
          key={x.code}
          cardValue={x}
          indx={indx}
          cardViewState={cardsAreStillHidden}
        />
      ))}
    </div>
  );
};

export default DealtCards;
