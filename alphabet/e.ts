enum Direction {
  North = 'NORTH',
  South = 'SOUTH',
  East = 'EAST',
  West = 'WEST'
}

function move(direction: Direction): string {
  switch (direction) {
    case Direction.North:
      return 'Moving north ↑';
    case Direction.South:
      return 'Moving south ↓';
    case Direction.East:
      return 'Moving east →';
    case Direction.West:
      return 'Moving west ←';
    default:
      // TypeScript will warn if we forget a case!
      const exhaustiveCheck: never = direction;
      return exhaustiveCheck;
  }
}

console.log(move(Direction.East)); // "Moving east →"

function getSeason(month: number): string {
    
  switch (month) {
    case 12: case 1: case 2:
      return 'Winter ❄️';
    case 3: case 4: case 5:
      return 'Spring 🌸';
    case 6: case 7: case 8:
      return 'Summer ☀️';
    case 9: case 10: case 11:
      return 'Autumn 🍂';
    default:
      return 'Invalid month';
  }
  // No break needed when using return
}