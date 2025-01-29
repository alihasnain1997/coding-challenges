// Given a list of numbers and a number k, return whether any two numbers from the list add up to k.

// For example, given [10, 15, 3, 7] and k of 17, return true since 10 + 7 is 17.

let checkSumPair = (arr, k) => {
  let seen = new Set();

  for (let num of arr) {
    console.log(seen);
    if (seen.has(k - num)) {
      return true;
    } else {
      seen.add(num);
    }
  }
  return false;
};

const arr = [10, 15, 3, 7];
const k = 17;

console.log(checkSumPair(arr, k)); // true
