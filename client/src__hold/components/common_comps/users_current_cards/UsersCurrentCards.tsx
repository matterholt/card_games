import * as React from 'react';

interface DealtCards {
  code: string;
  suit: string;
  value: string;
  image: string;
}

const UsersCurrentHand = ({ dealtCards }: { dealtCards: DealtCards[] }) => {
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

export default UsersCurrentHand;
