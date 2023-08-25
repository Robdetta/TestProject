import { Room, Client } from '@colyseus/core';
import { generateRandomPIN } from './utils';
import { MyRoomState } from './schema/MyRoomState';

export class CardGameRoom extends Room<MyRoomState> {
  maxClients = 6;

  onCreate(options: any) {
    this.setState(new MyRoomState());

    // Generate a random PIN
    this.state.pin = generateRandomPIN();
    this.onMessage('type', (client, message) => {
      //
      // handle "type" message
      //
    });
  }

  onJoin(client: Client, options: any) {
    const { joinPIN } = options;
    if (joinPIN !== this.state.pin) {
      // Handle incorrect PIN (e.g., kick the client)
    } else {
      // Allow the client to join the room
      this.state.players[client.sessionId] = { username: options.username };
    }
    console.log(client.sessionId, 'joined!');
  }

  onLeave(client: Client, consented: boolean) {
    delete this.state.players[client.sessionId];
    console.log(client.sessionId, 'left!');
  }

  onDispose() {
    console.log('room', this.roomId, 'disposing...');
  }
}
