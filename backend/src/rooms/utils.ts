// server/rooms/utils.ts
export function generateRandomPIN() {
  return Math.floor(1000 + Math.random() * 9000).toString();
}
