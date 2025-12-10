// BASIC TEMPLATE
switch ('variable') {
  default:
    // default code block
}

// WITH ENUMS
enum Status { Active, Inactive, Pending }
switch (status) {
  case 'Active': break;
  case 'Inactive': break;
}

// EXHAUSTIVENESS CHECK
type Shape = 'circle' | 'square';
function handleShape(shape: Shape) {
  switch (shape) {
    case 'circle': break;
    case 'square': break;
    default:
      const _exhaustive: never = shape;
      return _exhaustive;
  }
}
export default function lightspeed(){
var lightspeed = 299792458;
// MULTIPLE
const onehour = 3600 == 60 * 60
const oneday = 24 * 3600
const onemonth = 30 * 24 * 3600
const oneseason = 3 * 30 * 24 * 3600
let oneyear = 365 * 3 * 30 * 24 * 3600
}