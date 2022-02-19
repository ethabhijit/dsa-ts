function fact(n) {
  let res = 1;
  for (let i = 2; i <= n; i++) res *= i;

  return res;
}

function combination(n, r) {
  return fact(n) / (fact(r) * fact(n - r));
}

const n = 5;
const r = 3;

console.log(parseInt(combination(n, r)));
