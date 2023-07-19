import { DealtCard } from "../../../types/types";

const Cards = ({ cardInPlay }: { cardInPlay: DealtCard[] }) => {
  return (
    <div>
      {cardInPlay.map((x) => (
        <div key={x.code}>
          <img style={{ aspectRatio: "3/4", width: "100px" }} src={x.image} />
          <h3>
            {x.suit} <br /> of {x.value}
          </h3>
        </div>
      ))}
    </div>
  );
};

export default Cards;
