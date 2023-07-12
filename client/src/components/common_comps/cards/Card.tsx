interface DealtCards {
  code: string;
  suit: string;
  value: string;
  image: string;
}

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

export default Cards;
