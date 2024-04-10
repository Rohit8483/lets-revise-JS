//? Write a function called countChar that takes two parameters: a string and a character to count. The function should return the number of times the specified character appears in the string.

//Constraints:
//The function should be case-sensitive.
//The function should handle both lowercase and uppercase characters.

// The character parameter can be any printable ASCII character (the function shoold accept any character that is part of the ASCII character set and is printable).
// console.log(countChar("MissIssippi", "I")); // Output: 4

const findOccurence = (str, charVal) => {
  let makeItToLowerCase = str.toLowerCase().split("");
  let char = charVal.toLowerCase();
//   let res = makeItToLowerCase.filter((ele)=>ele===char)
let res= makeItToLowerCase.reduce((acc, curr)=>{
    if(curr === char){
        acc++;
    }
    return acc;
},0)
  console.log(res)
  return res;
};
console.log(findOccurence("MissIssippi", "I"));
//the condition which satisfies in filter the filter method will create new array of that
