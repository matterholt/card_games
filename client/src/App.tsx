import React from 'react'
import { Link } from './components/common_comps';
import './index.css';

export default function App() {
  return (
    <div style={{ display: 'flex', flexFlow: 'column' }}>
      <Link title="black jack" link="./table/blackjack" />
      <Link title="war" link="" />
      <Link title="other games" link="" />
    </div>
  );
}
