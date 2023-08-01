import { CardType } from "../../Types/types";
import styleCard from "./card.module.css";

const CardShown = ({ image }: { image: string }) => (
  <img style={{ aspectRatio: "3/4", width: "100px" }} src={image} />
);

function Card({
  cardValue,
  indx,
  cardViewState,
}: {
  cardValue: CardType;
  indx: number;
  cardViewState: boolean;
}) {
  const backOfCard = "https://www.deckofcardsapi.com/static/img/back.png";

  return (
    <div
      className={styleCard.card}
      style={{ left: 20 * indx, top: 5 * indx }}
      key={cardValue.code}
    >
      <CardShown
        image={cardViewState && indx === 0 ? backOfCard : cardValue.image}
      />
    </div>
  );
}

export default Card;
