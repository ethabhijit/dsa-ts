function fib(n) {
  if (n <= 1) return n;
  else {
    return fib(n - 1) + fib(n - 2);
  }
}

const count = 4;

if (count <= 0) console.log("Please enter value more that 2");
else {
  for (let i = 0; i < count; i++) {
    console.log(fib(i));
  }
}
