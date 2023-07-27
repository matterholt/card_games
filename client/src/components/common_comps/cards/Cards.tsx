import { DealtCard } from "../../../Types/types";
import styleCard from "./cards.module.css";

const Cards = ({ cardInPlay }: { cardInPlay: DealtCard[] }) => {
  const CardText = (suit: string, value: string) => (
    <h3>
      {suit} <br /> of {value}
    </h3>
  );

  return (
    <div className={styleCard.cardsOnTable}>
      {cardInPlay.map((x, indx) => (
        <div
          className={styleCard.card}
          style={{ left: 20 * indx, top: 5 * indx }}
          key={x.code}
        >
          <img style={{ aspectRatio: "3/4", width: "100px" }} src={x.image} />
        </div>
      ))}
    </div>
  );
};

export default Cards;
