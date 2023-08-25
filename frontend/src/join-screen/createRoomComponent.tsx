// CreateRoomComponent.tsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const CreateRoomComponent: React.FC = () => {
  const navigate = useNavigate();
  const [roomName, setRoomName] = useState('');
  const [pin, setPin] = useState('');

  const generateRandomPIN = () => {
    // Generate a random 4-digit PIN
    const randomPIN = Math.floor(1000 + Math.random() * 9000);
    setPin(randomPIN.toString()); // Store it in the component's state
  };

  const handleCreateRoom = () => {
    // Create a room with the entered roomName and generated PIN
    // You can implement this logic according to your requirements

    // After successfully creating the room, navigate to the game screen
    navigate('/game');
  };

  return (
    <div>
      <h2>Create a New Room</h2>
      <label>
        Room Name:
        <input
          type='text'
          value={roomName}
          onChange={(e) => setRoomName(e.target.value)}
        />
      </label>
      <button onClick={generateRandomPIN}>Generate 4-Digit PIN</button>
      <p>Your PIN: {pin}</p>
      <button onClick={handleCreateRoom}>Create Room</button>
    </div>
  );
};

export default CreateRoomComponent;
