// task 1 

function square(number) {
    return number * number;
  }
  let theNumber = prompt('Enter a number to square it?');
  let mySquare = square(theNumber);
  console.log(mySquare); 
  

// task 2 
function CubeOf2Number(num1, num2) {
    return Math.pow(num1,3) + Math.pow(num2,3);
  }
  let num1 = prompt('First number:');
  let num2 = prompt('Second number:');
  console.log(CubeOf2Number(num1,num2));


// task 3
  function reverseNumber(number) {
    let reversed = 0;
    while (number !== 0) {
      let lastDigit = number % 10;
      reversed = (reversed * 10) + lastDigit;
      number = Math.floor(number / 10);
    }
    return reversed;
  }
  let myNumber = prompt("Enter a series of number");
  let myReversedNumber = reverseNumber(myNumber);
  console.log(myReversedNumber);
  
  
// task 4  
  function isDivisible(num){
    for(let i = 1; i <= 100; i++){
      if(i % num == 0) 
      console.log(i);
    }
  }
  let num3 = prompt('are the number divisible?');
  isDivisible(num3);