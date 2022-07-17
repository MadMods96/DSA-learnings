// in this function we will be printing fibonacci number till n given number with the help of recursive function.

const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("What the number", function (num) {
  main(num);
  rl.close();
});

function main(num) {
  let a = 0,
    b = 1;
  console.log(a);
  console.log(b);
  fib(a, b, num - 2); //here we have already taken 2 number of fibonacci so we will go for only n-2 term.
}

function fib(a, b, n) {
  let c = a + b;
  console.log(c);
  if (n == 0) {
    return;
  }
  return fib(b, c, n - 1);
}
// input : 7,
//output : 0
// 1
// 1
// 2
// 3
// 5
// 8
// 13
