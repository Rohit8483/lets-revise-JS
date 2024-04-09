// You are required to implement a function generatemash that generates a hash tag from a given input string. The hash tag should be constructed as follows:

// The input string should be converted to a hash tag format, where each word is capitalized and concatenated together without spaces.

// If the length of the input string is greater than 280 characters or if the input string is empty or contains only whitespace, the function should return false.

// Otherwise, the function should return the generated hash tag prafixed with #.

const generateHashtag = (string) => {
  if (string.trim().length === 0 || string.trim().length > 280) {
    return "false";
  }
  let stringToArr = string.split(" ");
  let res = stringToArr.map((ele) => {
    // return ele[0].toUpperCase()+ele.slice(1);
    return ele.charAt(0).toUpperCase()+ele.slice(1).toLowerCase();
    // return ele.replace(ele.charAt(0), ele.charAt(0).toUpperCase());
  });

  return `#${res.join("")}`;
};

console.log(generateHashtag("my name is ROHIT TTT"));
// exp op=> #MyNameIsRohit
