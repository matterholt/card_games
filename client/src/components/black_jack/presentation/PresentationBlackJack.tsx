import {
  Link,
  TableHeader,
  CurrentPlayedCards,
  DealtCards,
  PlayerActions,
} from "../../common_comps";
import { TableLayout } from "../../black_jack";
import { CardDeckId, CardDeckCount } from "../../Types/types";
import React from "react";

const PresentationBlackJack = ({
  dealtCards,
  deckID,
  remainingCards,
}: {
  dealtCards;
  deckID: CardDeckId;
  remainingCards: CardDeckCount;
}) => {
  const { dealer, players } = dealtCards;

  // split array, if there is anything left over then
  // think should change to an object which will be better to
  // define which card belong to which player
  const loggedInPlayer = players[0];
  const otherPlayers = Object.keys(players).length > 1;

  function DrawCard(cardCount: number, playerId: string) {
    console.log(
      `player ${playerId} request to draw ${cardCount} numbers of cards`
    );
  }

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
      <TableLayout
        layoutStyle={otherPlayers ? "showOtherPlayers" : "justDealer"}
      >
        <CurrentPlayedCards position="dealer">
          <p>Dealer</p>
          <DealtCards cardInPlay={dealer} cardDealtTo="dealer" />
        </CurrentPlayedCards>
        <CurrentPlayedCards position="faceDownDeck">
          <p>face down deck</p>
          <p>DeckID: {deckID}</p>
          <p>remaining cards: {remainingCards}</p>
        </CurrentPlayedCards>
        <CurrentPlayedCards position="player1">
          <p>Logged In player</p>
          <DealtCards cardInPlay={loggedInPlayer} cardDealtTo="loggedInUser" />
          <PlayerActions drawCard={DrawCard} />
        </CurrentPlayedCards>
        {otherPlayers ? (
          <CurrentPlayedCards position="playersGrouped">
            <p>other players</p>
          </CurrentPlayedCards>
        ) : (
          <div></div>
        )}
      </TableLayout>
    </div>
  );
};

export default PresentationBlackJack;
