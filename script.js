const players = ["John", "Bob", "Alice", "Poppy"];

const person = {
  name: "John Doe",
  age: 80,
};

// Write your code here
const team = players;                  // Reference to original array
const team1 = [...players];            // Shallow copy using spread
const cap1 = { ...person };            // Shallow copy of object

// Expose to global scope
window.players = players;
window.person = person;
window.team = team;
window.team1 = team1;
window.cap1 = cap1;

