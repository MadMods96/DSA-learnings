class Main {
  constructor(x, n) {
    console.log(this.pwr(x, n));
  }

  pwr(x, n) {
    if (x == 0) {
      return 0;
    }
    if (n == 0) {
      return 1;
    }

    return x * this.pwr(x, n - 1);
  }
}

let x = new Main(2, 4);


//output : 16
