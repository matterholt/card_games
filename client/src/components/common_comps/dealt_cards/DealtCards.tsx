import { CardType } from "../../Types/types";
import styleCard from "./dealtcards.module.css";
import { Card, CardValueHeader } from "..";

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

  const CardVales = !cardsAreStillHidden
    ? cardInPlay.map((x) => {
        return { code: x.code, suit: x.suit, value: x.value };
      })
    : [];

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
      <div>
        {CardVales.map((x) => (
          <CardValueHeader suit={x.suit} value={x.value} key={x.code} />
        ))}
      </div>
    </div>
  );
};

export default DealtCards;
