import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Routes,
} from 'react-router-dom';
import LoginComponent from './join-screen/logincomponent';
import './App.css';
//import * as Colyseus from 'colyseus.js';

//const client = new Colyseus.Client('ws://localhost:2567');

function App() {
  // useEffect(() => {
  //   // Move the room joining logic inside the useEffect
  //   client
  //     .joinOrCreate('my_room')
  //     .then((room) => {
  //       console.log(room.sessionId, 'joined', room.name);
  //     })
  //     .catch((e) => {
  //       console.log('JOIN ERROR', e);
  //     });
  // }, []); // An empty dependency array ensures this effect runs only once on mount

  return (
    <Router>
      <Routes>
        <Route
          path='/'
          element={<LoginComponent />}
        />
      </Routes>
    </Router>
  );
}

export default App;
