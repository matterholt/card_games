import { Link, TableHeader, CurrentPlayedCards } from "../../common_comps";
import { TableLayout } from "../../black_jack";

const PresentationBlackJack = () => {
  return (
    <div>
      <TableHeader title="black jack">
        <Link title="Main Table" link="../" />
      </TableHeader>
      <TableLayout>
        <CurrentPlayedCards player="dealer" />
        <CurrentPlayedCards player="faceDownDeck" />
        <CurrentPlayedCards player="player1" />
        <CurrentPlayedCards player="player2" />
        <CurrentPlayedCards player="player3" />
      </TableLayout>
    </div>
  );
};

export default PresentationBlackJack;
