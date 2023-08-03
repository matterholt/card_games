import actionList from "./playerAction.module.css";

function Button({
  onAction,
  children,
}: {
  onAction: PlayerAction;
  children?: React.ReactNode;
}) {
  return (
    <div>
      <button onClick={() => onAction(1, "1")}>{children}</button>
    </div>
  );
}

interface PlayerAction {
  drawCard: () => void;
}

function cardActionReducer(state, action) {
  if (action.type === "drawCard") {
    console.log("Make a call to API for card");
  }
}

function PlayerActions({ drawCard }: { drawCard: PlayerAction }) {
  const tempActionList = ["hold", "draw"];
  return (
    <div>
      <ul className={actionList.ulList}>
        {tempActionList.map((x) => (
          <li key={x}>
            <Button onAction={drawCard}>{x}</Button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default PlayerActions;
