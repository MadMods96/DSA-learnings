// here is the example of a recursive class

class main {
  constructor(num) {
    this.a = 0;
    console.log(this.a);
    this.b = 1;
    console.log(this.b);
    this.fib(this.a, this.b, num - 2);
  }

  fib(a, b, n) {
    let c = a + b;
    console.log(c);
    if (n == 0) {
      return;
    }

    return this.fib(b, c, n - 1);
  }
}

let x = new main(6);

// output :
// 0
// 1
// 1
// 2
// 3
// 5
// 8
