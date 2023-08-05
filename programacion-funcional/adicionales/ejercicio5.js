//5

function zero() {
  return 0;
}

function one() {
  return 1;
}

function two() {
  return 2;
}

function three() {
  return 3;
}

function four() {
  return 4;
}

function five() {
  return 5;
}

function six() {
  return 6;
}

function seven() {
  return 7;
}

function eight() {
  return 8;
}

function nine() {
  return 9;
}

function plus(left) {
  return function (right) {
    return left + right;
  };
}

function minus(left) {
  return function (right) {
    return left - right;
  };
}

function times(left) {
  return function (right) {
    return left * right;
  };
}

function dividedBy(left) {
  return function (right) {
    return Math.floor(left / right);
  };
}

console.log(plus(eight())(nine()));
console.log(minus(five())(one()));
console.log(times(seven())(eight()));
console.log(dividedBy(two())(zero()));
