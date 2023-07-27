import actionList from "./playerAction.module.css";

function PlayerActions() {
  const tempActionList = ["hold", "draw"];
  return (
    <div>
      <h2>list of actions to perform on deal</h2>
      <ul className={actionList.ulList}>
        {tempActionList.map((x) => (
          <li>{x}</li>
        ))}
      </ul>
    </div>
  );
}

export default PlayerActions;
