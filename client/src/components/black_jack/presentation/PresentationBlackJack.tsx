import {
  Link,
  TableHeader,
  CurrentPlayedCards,
  Cards,
  PlayerActions,
} from "../../common_comps";
import { TableLayout } from "../../black_jack";

const PresentationBlackJack = ({ dealtCards, deckID, remainingCards }) => {
  const { dealer, players } = dealtCards;

  // split array, if there is anything left over then
  // think should change to an object which will be better to
  // define which card belong to which player
  const loggedInPlayer = players[0];

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
          <Cards cardInPlay={dealer} />
        </CurrentPlayedCards>
        <CurrentPlayedCards position="faceDownDeck">
          <p>face down deck</p>
          <p>DeckID: {deckID}</p>
          <p>remaining cards: {remainingCards}</p>
        </CurrentPlayedCards>
        <CurrentPlayedCards position="player1">
          <p>Logged In player</p>
          <PlayerActions />
          <Cards cardInPlay={loggedInPlayer} />
        </CurrentPlayedCards>
        <CurrentPlayedCards position="playersGrouped">
          <p>other players</p>
        </CurrentPlayedCards>
      </TableLayout>
    </div>
  );
};

export default PresentationBlackJack;
