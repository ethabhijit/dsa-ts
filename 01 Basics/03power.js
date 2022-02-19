function myPowerImplementation(b, p) {
  if (p === 0) return 1;
  else {
    return myPowerImplementation(b, p - 1) * b;
  }
}

// console.log(myPowerImplementation(2, 3));

function power(base, exp) {
  if (exp === 1) return base;
  if (exp !== 1) return base * power(base, exp - 1); 
}

const base = 2;
const exp = 3;

console.log(`Value is: ${power(base, exp)}`);
