type Operation = 'add' | 'subtract' | 'multiply' | 'divide';

function calculate(a: number, b: number, op: Operation): number {
  switch (op) {
    case 'add':
      return a + b;
    case 'subtract':
      return a - b;
    case 'multiply':
      return a * b;
    case 'divide':
      if (b === 0) throw new Error('Division by zero');
      return a / b;
    default:
      const _exhaustiveCheck: never = op;
      throw new Error(`Unknown operation: ${_exhaustiveCheck}`);
  }
}


// Switch can be optimized by JavaScript engines
// Lookup tables (objects/maps) can be even faster for large cases

// For many cases, consider a lookup object:
const operations: Record<string, (a: number, b: number) => number> = {
  add: (a, b) => a + b,
  subtract: (a, b) => a - b,
  multiply: (a, b) => a * b,
  divide: (a, b) => a / b,
};

function calculateOptimized(a: number, b: number, op: string): number {
  const operation = operations[op];
  if (!operation) throw new Error('Invalid operation');
  return operation(a, b);
}