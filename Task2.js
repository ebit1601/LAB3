//task 1
function sumOfDigits(number) {
    if (number === 0) {
      return 0;
    } else {
      return (number % 10) + sumOfDigits(Math.floor(number / 10));
    }
  }
  let myNumber = prompt("Enter a number");
  let mySum = sumOfDigits(myNumber);
  console.log(mySum);
  
  
//task 2
  function power(x, y) {
    if (y === 0) {
      return 1;
    } else if (y % 2 === 0) {
      let result = power(x, y / 2);
      return result * result;
    } else {
      return x * power(x, y - 1);
    }
  }
  let myX = prompt("the value of x");
  let myY = prompt("the value of y (x^y)");
  let myPower = power(myX, myY);
  console.log(myPower);
  