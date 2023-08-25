import { useState } from 'react';
import './App.css';
import * as Colyseus from 'colyseus.js';
import PhaserGame from './PhaserGame';

const client = new Colyseus.Client('ws://localhost:2567');
function App() {
  client
    .joinOrCreate('my_room')
    .then((room) => {
      console.log(room.sessionId, 'joined', room.name);
    })
    .catch((e) => {
      console.log('JOIN ERROR', e);
    });

  return (
    <div className='App'>
      <header className='App-header'></header>
      <main>
        <PhaserGame socket={client} />
      </main>
    </div>
  );
}

export default App;
