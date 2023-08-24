import { useState } from 'react';

import './App.css';
import * as Colyseus from 'colyseus.js'; // not necessary if included via <script> tag.

function App() {
  const [count, setCount] = useState(0);

  let client = new Colyseus.Client('ws://localhost:2567');

  return ();
}

export default App;
