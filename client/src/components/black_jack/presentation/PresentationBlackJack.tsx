import { Link, TableHeader, CurrentPlayedCards } from "../../common_comps";
import { TableLayout } from "../../black_jack";

const PresentationBlackJack = ({ dealtCards, deckID }) => {
  const { dealer, players } = dealtCards;
  return (
    <div
      style={{
        display: "flex",
        flexFlow: "column",
        width: "100vw",
        alignItems: "center",
      }}
    >
      <TableHeader title="black jack">
        <Link title="Main Table" link="../" />
      </TableHeader>
      <TableLayout>
        <CurrentPlayedCards position="dealer">
          <p>Dealer</p>
        </CurrentPlayedCards>
        <CurrentPlayedCards position="faceDownDeck">
          <p>face down deck</p>
        </CurrentPlayedCards>
        <CurrentPlayedCards position="player1">
          <p>Logged In player</p>
        </CurrentPlayedCards>
        <CurrentPlayedCards position="playersGrouped">
          <p>other players</p>
        </CurrentPlayedCards>
      </TableLayout>
    </div>
  );
};

export default PresentationBlackJack;
