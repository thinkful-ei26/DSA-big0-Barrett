'use strict';
// Even or odd

function isEven(value){
  if (value % 2 === 0){
    return true;
  }
  else
    return false;
}

// complexity: 0(1)
// why: input size doesn't effect complexity


// Are you here?

function areYouHere(arr1, arr2) {
  for (let i=0; i<arr1.length; i++) {
    const el1 = arr1[i];
    for (let j=0; j<arr2.length; j++) {
      const el2 = arr2[j];
      if (el1 === el2) return true;
    }
  }
  return false;
}

//Ploynomial 0(i*j)
// big 0: 0(1)
// why: Increases as polynomial because of the nested array, but because of the 2 
// inputs with different lengths its i*j


// Doubler

function doubleArrayValues(array) {
  for (let i=0; i<array.length; i++) {
    array[i] *= 2;
  }
  return array;
}

// why: The function loops through a single array once, so its complexity is linear
// complexity: linear 0(n)
// big 0: 0(n)


// Naive Search

function naiveSearch(array, item) {
  for (let i=0; i<array.length; i++) {
    if (array[i] === item) {
      return i;
    }
  }
}

// why: Checks each item in array against item, complextiy goes up linearily with input size,
// best case the item is at index 0 of array
// complexity: linear 0(n)
// big0: 0(1)


// Creating pairs:

function createPairs(arr) {
  for (let i = 0; i < arr.length; i++) {
    for(let j = i+1; j < arr.length; j++) {
      console.log(arr[i] + ', ' +  arr[j] );
    }
  }
}

// why: single array input, nested loop. Best and worst case stay as 0(n^2) because 
// it will always be necessary to go throught the full array to complete the function
// complexity: polynomial 0(n^2)
// big0: 0(n^2)


// Computing fibonaccis

function generateFib(num) {
  let result = [];
  for (let i = 1; i <= num; i++) {

    // we're adding the first item
    // to the result list, append the
    // number 0 to results
    if (i === 1) {
      result.push(0);
    }
    // ...and if it's the second item
    // append 1
    else if (i === 2) {
      result.push(1);
    }

    // otherwise, sum the two previous result items, and append that value to results.
    else {
      result.push(result[i - 2] + result[i - 3]);
    }
  }
  // once the for loop finishes
  // we return `result`.
  return result;
}

// why: complexity stays linear, single num input is looped amd then each itereation is compared 
// to 3 constant conditions, so complexity is only dependant on size of n
// complexity: linear 0(n)
// big-0; 0(n)


// An Efficient Search

function efficientSearch(array, item) {
  let minIndex = 0;
  let maxIndex = array.length - 1;
  let currentIndex;
  let currentElement;

  while (minIndex <= maxIndex) {
    currentIndex = Math.floor((minIndex + maxIndex) / 2);
    currentElement = array[currentIndex];

    if (currentElement < item) {
      minIndex = currentIndex + 1;
    }
    else if (currentElement > item) {
      maxIndex = currentIndex - 1;
    }
    else {
      return currentIndex;
    }
  }
  return -1;
}

// why: Because the input is cut in half with each iteration its complexity quickly 
// decreases despite the size of n.
// complexity: logarithmic 0(log(n))
// Big-0: best case is 0(1) because it could possibly match item on first try.
// and worst case is 0(n) because the item could be the last checked


// Random element

function findRandomElement(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

// why: will always return a result first try, no matter the size of n
// complexity: constant 0(1)
// big-0: 0(1)


// Is it prime?

function isPrime(n) {
  // if n is less than 2 or a decimal, it's not prime
  if (n < 2 || n % 1 !== 0) {
    return false;
  }
  // otherwise, check if `n` is divisible by any integer
  // between 2 and n.
  for (let i = 2; i < n; ++i) {
    if (n % i === 0) return false;
  }
  return true;
}

// why: the loop complexity is dependant on the size of the input
// complexity: linear 0(n)
// big-0: 0(1)



// ----- Recursive Solutions ------ 

// counting sheep
// Complexity: linear 0(n)
// best case: 0(1)
// why: Calls itslelf recursively however many times until input reaches zero,
// dependant on number input size


// Doubler
// Complexity: linear 0(n)
// best case: 0(n), has to loop through entire array no matter what, 0(1) if input
// is empty array.
// why: loops through single array input. Complexity is == to arr size.


// Reverse String
// Complexity: linear 0(n)
// best case: 0(1) if input is an empty string
// why: runs recursivley with string length minus 1 until it reaches 0 so complexity is
// linear


// String Splitter
// Complexity: linear 0(n)
// best case: 0(1), theres nothing to split
// why: the input could bea string that needs to be split on every index, 
// making it linear


// Binary Representation
// Complexity: log 0(lon(n))
// best case: 0(1) if input is 0 or a negative number
// why: Each recursive call significantly reduces the size of the input


// Factorial
// Complexity: linear 0(n) 
// best case: 0(1), if input is 1 or 0
// why: each recursive call is made with n-1 until n is zero so,
// the function runs however many times as the input number


// Fibonacci
// Complexity: Exponential 0(2^n)
// best case: 0(1)
// why: Every recursive call requires the previous 2 fib numbers, which quickly
//  builds exponentially.


// Anagram
// Complexity: factorial 0(n!)
// best case: 0(1)
// why: Complexity gets out of hand quickly. The loop runs through every possible
// combination.


// Animal Hierarchy 
// Complexity: linear 0(n * n)
// best case: 
// why: The .filter decreases the complexity so that each loop is 0(n)


// Organization chart

function traverseB(node, indent=0) {
  for (var key in node) {
    console.log(' '.repeat(indent), key);
    traverseB(node[key], indent + 4);
  }
}

// Complexity: Linear 0(n)
// best case:
// whay: The function is called recursively once for each part of 'node'



// ----- Iterative Solutions ------ 

// Countin Sheep

function countSheepLoop(num){
  for(let i=num; i>0; i--){
    console.log(`counting sheeps ${i}`);
  }
}
countSheepLoop(10);

// Complexity: Linear 0(n)
// Why: The loop runs once for each num

// Doubler

function double_all(arr) {
  var ret = Array(arr.length);
  for (var i = 0; i < arr.length; ++i) {
    ret[i] = arr[i] * 2;
  }
  return ret;
}
let arr = [10,4,5,2,1];
console.log(double_all(arr));

// Complexity: Linear 0(n)
// Function hits each index of input array once

// String Reverse

function reverse_tail(str) {
  var accumulator = '';
  while (str !== '') {
    accumulator = str[0] + accumulator;
    str = str.slice(1);
  }
  return accumulator;
}

// Complexity: Linear 0(n)
// Why: reduces string by one with each loop and stops when string length is 0


// Triangular

function triangle(n) {
  var tot = 0;
  for (var i = 1; i <= n; ++i) {
    tot += n;
  }
  return tot;
}

// Complexity: linear 0(n)
// Why: The function loops through n once for each iteration

// String splitter

function split(str, sep) {
  var ret = [];
  while (true) {
    var idx = str.indexOf(sep);
    if (idx == -1) break;
    ret.push(str.slice(0, idx));
    str = str.slice(idx + sep.length);
  }
  ret.push(str);
  return ret;
}

// Complexity: linear 0(n)
// Why: The number of instances of sep in str determines directly
// the number of iterations

