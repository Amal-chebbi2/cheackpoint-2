//Reverse a String
function reverseString(str) {
  return str.split('').reverse().join('');
}

// Count Characters

function countCharacters(str) {
  return str.length;
}


// Capitalize Words

function capitalizeWords(sentence) {
  return sentence
    .split(" ")
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}

//Find Maximum and Minimum
function findMax(arr) {
  return Math.max(...arr);
}

function findMin(arr) {
  return Math.min(...arr);
}

 //Sum of Array

function sumArray(arr) {
  return arr.reduce((sum, num) => sum + num, 0);
}
//Filter Array (exemple : nombres pairs)

function filterEven(arr) {
  return arr.filter(num => num % 2 === 0);
}
//Factorial
function factorial(n) {
  if (n === 0 || n === 1) return 1;
  return n * factorial(n - 1);
}
//Prime Number Check
function isPrime(n) {
  if (n <= 1) return false;
  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) return false;
  }
  return true;
}
//Fibonacci Sequence
function fibonacci(n) {
  let sequence = [0, 1];
  for (let i = 2; i < n; i++) {
    sequence.push(sequence[i - 1] + sequence[i - 2]);
  }
  return sequence.slice(0, n);
}



