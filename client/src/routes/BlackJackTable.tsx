
import { Link,TableHeader } from '../components/common_comps';

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

export default function BlackJackTable() {
  return (
    <div>
      <TableHeader title="black jack">
      <Link title="Main Table" link="../" />

      </TableHeader>
    </div>
  );
}
