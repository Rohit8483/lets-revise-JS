//day1=>Write a function findLongestword that takes a string as input and returns the longest word in the string. If there are multiple longest words, return the first one encountered.

// Constraints:
// The input string may contain alphabetic characters, digits, spaces, and punctuation.
// The input string is non-empty.
// The input string may contain multiple words separated by spaces.

// Note:
// If the input string is empty or contains only whitespace, the function should return an false
// The function should ignore leading and trailing whitespace when determining the longest word.

// let string="my name is rohit and I am a react js developer";
// expected op=> "developer"

function letsFindLongestString(string) {
  if (string.trim().length === 0) {
    return false;
  }
  let makeItArray = string.split(" ");
  //   return makeItArray.sort() if we use normal sort method so the unicode values as per ascii of capital letter is less and it will give op like first all elements with caps letter then small letters

  let sortedArr = makeItArray.sort((a, b) => {
    return b.length - a.length;
  });
  return sortedArr[0];

  // if we do it by ascending order then we can return last element=>
  //   let sortedArr = makeItArray.sort((a, b) => {
  //     return a.length - b.length;
  //   });
  //   return sortedArr.at(-1);
}

console.log(
  letsFindLongestString(
    "my NAME is ROHITROHIT and I am a reactreactreact JS developer"
  )
);

// notes
// 1.let text = "     Hello World!     ";
// let result = text.trim();
// op=> Hello World!

// 2. let text = "     Hello         World!     ";
// let result = text.trim();
// op=> Hello         World!

// The trim() method removes whitespace from both sides of a string. first and last not from middle order.
// The trim() method does not change the original string.

function letsFindLongestStringByReduceMethod(string) {
  if (string.trim().length === 0) {
    return false;
  }
  let makeItArray = string.split(" ");

  let result = makeItArray.reduce(
    (accumulator, element) =>
      element.length > accumulator.length ? element : accumulator,
    ""
  );

  return result;
}
//  The reduce() method in JavaScript always returns the value of the accumulator after the final iteration. The accumulator is the single value that accumulates the results of the reduction operation over each element of the array.

console.log(
  letsFindLongestStringByReduceMethod(
    "my 123456789123456789 NAME is ROHITROHIT and I am a react JS developer"
  )
);

// reduce method's magic
let arr = [1, 2, 3, 4, 5, 6];
let res = arr.reduce((acc, ele) => {
  return acc + ele;
//   it return the value each time to accumulator
}, 0);

// if u want to return from reduce method use curly brace
// if not using return keyword we can use () brackets
console.log(res);
