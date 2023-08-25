import { Room, Client } from '@colyseus/core';
import { generateRandomPIN } from './utils';
import { MyRoomState, Player } from './schema/MyRoomState';

// Create an interface for options
interface JoinOptions {
  joinPIN: string;
  username: string;
}
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

  onJoin(client: Client, options: JoinOptions) {
    const { joinPIN } = options;
    if (joinPIN !== this.state.pin) {
      // Handle incorrect PIN (e.g., kick the client)
    } else {
      // Allow the client to join the room
      const player = new Player();
      player.username = options.username;
      this.state.players.set(client.sessionId, player);
    }
    console.log(client.sessionId, 'joined!');
  }

  onLeave(client: Client, consented: boolean) {
    this.state.players.delete(client.sessionId); // Use 'delete' method
    console.log(client.sessionId, 'left!');
  }

  onDispose() {
    console.log('room', this.roomId, 'disposing...');
  }
}
