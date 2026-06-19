// TYPE DECLARATIONS
type Alias = string | number;
interface IPerson { name: string; }
class Person implements Person { }
enum Color { Red, Green, Blue }

// GENERICS
function identity<T>(x: T): T { return x; }
type Container<T> = { value: T };

// CONDITIONAL TYPES
type IsString<T> = T extends string ? true : false;

// MAPPED TYPES
type Optional<T> = { [P in keyof T]?: T[P] };

// TEMPLATE LITERAL TYPES
type EventName = `on${Capitalize<string>}`;