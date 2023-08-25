import { Schema, type, MapSchema } from '@colyseus/schema';

export class Player extends Schema {
  @type('string') username: string;
  // Add other player-related properties here
}

export class MyRoomState extends Schema {
  @type('string') mySynchronizedProperty: string = 'Hello world';
  @type('string') pin: string = ''; // Define the 'pin' property
  @type({ map: Player }) players = new MapSchema<Player>();
}
