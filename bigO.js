'use strict';
// Even or odd

function isEven(value){
  if (value % 2 === 0){
    return true;
  }
  else
    return false;
}

// input size doesn't effect complexity
// complexity: 0(1)



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

// Increases as polynomial because of the nested array, but because of the 2 
// inputs with different lengths its i*j
//Ploynomial 0(i*j)
// big 0: 0(1)


// Doubler

function doubleArrayValues(array) {
  for (let i=0; i<array.length; i++) {
    array[i] *= 2;
  }
  return array;
}

// The function loops through a single array once, so its complexity is linear
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

// Checks each item in array against item, complextiy goes up linearily with input size,
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

// single array input, nested loop. Best and worst case stay as 0(n^2) because 
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

// complexity stays linear, single num input is looped amd then each itereation is compared 
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

// Because the input is cut in half with each iteration its complexity quickly 
// decreases despite the size of n.
// complexity: logarithmic 0(log(n))
// Big-0: best case is 0(1) because it could possibly match item on first try.
// and worst case is 0(n) because the item could be the last checked


// Random element

function findRandomElement(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

// will always return a result first try, no matter the size of n
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

// the loop complexity is dependant on the size of the input
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


