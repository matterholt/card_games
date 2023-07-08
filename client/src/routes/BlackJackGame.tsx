import { PresentationBlackJack } from "../components/black_jack";
// const temp_logic =()={
//   const { fetchedData, status, sending } = useFetch();

//   if (status === 'waiting') {
//     return <button onClick={() => sending()}> Deal</button>;
//   }
//   if (status === 'dealing') {
//     return <Loading />;
//   }
//   if (status === 'error') {
//     return (
//       <div>
//         {status}
//         <button onClick={() => sending()}> Deal</button>{' '}
//       </div>
//     );
//   }

//   return <CurrentHand dealtCards={fetchedData.cards} />;
// }

/*

TODO:

make this the data layer



*/

export default function BlackJackGame() {
  return <PresentationBlackJack />;
}
