import styleCard from "./cardvalueheader.module.css";

const CardValueHeader = ({ suit, value }: { suit: string; value: string }) => (
  <p className={styleCard.cardValue}>
    {suit} of {value}
  </p>
);

export default CardValueHeader;
