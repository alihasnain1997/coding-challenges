// Given an array of integers, return a new array such that each element at index i of the new array is the product of all
//  the numbers in the original array except the one at i.

// For example, if our input was [1, 2, 3, 4, 5],
// the expected output would be [120, 60, 40, 30, 24].
//  If our input was [3, 2, 1], the expected output would be [2, 3, 6].

// Follow-up: what if you can't use division?

let productOfAllExcept = (arr) => {
  const prductArr = [];
  for (let i = 0; i < arr.length; i++) {
    let product = 1;
    for (let j = 0; j < arr.length; j++) {
      if (i !== j) {
        product *= arr[j];
      }
    }
    prductArr.push(product);
  }
  return prductArr;
};

const arr = [1, 2, 3, 4, 5];

// console.log(productOfAllExcept(arr)); // [120, 60, 40, 30, 24]
// console.log(productOfAllExcept([3, 2, 1])); // [2, 3, 6]

const productOfAllExceptWithoutDivision = (arr) => {
  const n = arr.length;
  const result = new Array(n).fill(1);

  // Compute the left product for each index
  let leftProduct = 1;
  for (let i = 0; i < n; i++) {
    result[i] = leftProduct;
    leftProduct *= arr[i];
  }

  // Compute the right product and update the result array
  let rightProduct = 1;
  for (let i = n - 1; i >= 0; i--) {
    result[i] *= rightProduct;
    rightProduct *= arr[i];
  }

  return result;
};

// Example usage
console.log(productOfAllExceptWithoutDivision([1, 2, 3, 4, 5])); // [120, 60, 40, 30, 24]
console.log(productOfAllExceptWithoutDivision([3, 2, 1])); // [2, 3, 6]
