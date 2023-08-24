import { useState } from 'react';
import './App.css';
import * as Colyseus from 'colyseus.js';
import PhaserGame from './PhaserGame';
import { Socket } from 'dgram';

function App() {
  const client = new Colyseus.Client('ws://localhost:2567');

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
