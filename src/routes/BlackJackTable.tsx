import * as React from 'react';
import { Link } from '../components/common_comps';

const Loading = () => {
  return <h1>shuffling....</h1>;
};

const CurrentHand = ({ dealtCards }) => {
  return (
    <div className="hand_self">
      {dealtCards.map((x) => (
        <div key={x.code}>
          <img style={{ aspectRatio: '3/4', width: '100px' }} src={x.image} />
          <h3>
            {x.suit} <br /> of {x.value}
          </h3>
        </div>
      ))}
    </div>
  );
};

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
      <Link title="Main Table" link="./" />
    </div>
  );
}
