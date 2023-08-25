import Phaser from 'phaser';

// Define your game configuration
const config: Phaser.Types.Core.GameConfig = {
  type: Phaser.AUTO,
  width: 800,
  height: 600,
  scene: {
    preload: preload,
    create: create,
    update: update,
  },
};

// Export the configuration
export default config;

// Your preload, create, and update functions can also be defined here or in separate modules.
function preload() {
  // Load game assets here
}

function create() {
  // Initialize game elements here
}

function update() {
  // Game update logic here
}
