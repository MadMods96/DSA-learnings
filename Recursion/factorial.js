function find(n){
    
 
        
        if(n === 0 ){
            return 1;
        }
        
        return n * find(n-1);
        
    
}
console.log(find(5));
//output : 120


// this is an example of calculating the factorial OF a number with recursive function

const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("What the number", function (num) {
  console.log(main(num));
  rl.close();
});

rl.on("close", function () {
  process.exit(0);
});

function main(num) {
  return factorial(num);
}

function factorial(n) {
  if (n == 0 || n == 1) {
    return 1;
  }

  return n * factorial(n - 1);
}

