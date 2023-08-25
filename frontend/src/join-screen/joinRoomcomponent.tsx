// JoinRoomComponent.tsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const JoinRoomComponent: React.FC = () => {
  const navigate = useNavigate();
  const [pin, setPin] = useState('');

  const handleJoinRoom = () => {
    // Verify the entered PIN here (e.g., compare it with the actual room PIN)
    // If the PIN is correct, navigate to the game screen
    if (pin === '1234') {
      navigate('/game'); // Replace '1234' with the actual PIN check logic
    } else {
      // Handle incorrect PIN (e.g., show an error message)
    }
  };

  return (
    <div>
      <h2>Join an Existing Room</h2>
      <label>
        Enter the 4-digit PIN:
        <input
          type='text'
          value={pin}
          onChange={(e) => setPin(e.target.value)}
        />
      </label>
      <button onClick={handleJoinRoom}>Join Room</button>
    </div>
  );
};

export default JoinRoomComponent;
