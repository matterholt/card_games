import actionList from "./playerAction.module.css";

function Button({ children }: { children?: React.ReactNode }) {
  return (
    <div>
      <button>{children}</button>
    </div>
  );
}

function PlayerActions() {
  const tempActionList = ["hold", "draw"];
  return (
    <div>
      <ul className={actionList.ulList}>
        {tempActionList.map((x) => (
          <li>
            <Button>{x}</Button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default PlayerActions;
