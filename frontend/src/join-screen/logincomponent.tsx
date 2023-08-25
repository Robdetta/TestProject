// LoginComponent.tsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const LoginComponent: React.FC = () => {
  const history = useNavigate();
  const [username, setUsername] = useState('');
  const [roomOption, setRoomOption] = useState('');

  const handleLogin = () => {
    // Handle the login logic here, e.g., validation and authentication

    // After successful login, based on the selected room option, navigate to the corresponding screen
    if (roomOption === 'join') {
      // Redirect to the room join screen
      history.push('/join-room');
    } else if (roomOption === 'create') {
      // Redirect to the room creation screen
      history.push('/create-room');
    } else {
      // Handle other options if needed
    }
  };

  return (
    <div>
      <h2>Login</h2>
      <label>
        Username:
        <input
          type='text'
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </label>
      <div>
        <p>Select an option:</p>
        <label>
          <input
            type='radio'
            name='roomOption'
            value='join'
            checked={roomOption === 'join'}
            onChange={() => setRoomOption('join')}
          />
          Join an Existing Room
        </label>
        <label>
          <input
            type='radio'
            name='roomOption'
            value='create'
            checked={roomOption === 'create'}
            onChange={() => setRoomOption('create')}
          />
          Create a New Room
        </label>
      </div>
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};

export default LoginComponent;
