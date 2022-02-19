function myFact(n) {
  if (n === 1) return n;
  else return n * myFact(n - 1);
}

let num = 5;

if (num < 0) console.log("No negative number");
else if (num === 0) console.log("Factorial is: 1");
else console.log(`Factorial is: ${myFact(num)}`);
