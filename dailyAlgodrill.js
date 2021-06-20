// Code Challenge #1
// If I give you a string of repeating characters, return a string each character following by the number of times it occurs.
// Example: “aabbbc” => “a2b3c1”

const defaultString = 'abccggddauuj'
let reduceObj = defaultString.split('').reduce((acc, value)=>{
  return {
    ...acc,
    [value]: acc[value]? acc[value]+1 : 1
  }
},{})

console.log(reduceObj)
const output = Object.entries(reduceObj).flat().join('')
console.log('entries-ouput',Object.entries(reduceObj))
console.log('entries-flat-ouput',Object.entries(reduceObj).flat())
console.log(output)



const defaultString2 = 'hhhhkddkkkfhiiz'
const obJStore = {};
const anotherWay = defaultString2.split("").forEach((value) => {
  obJStore[value] = obJStore[value] ? obJStore[value] + 1 : 1;
});
const output2 = Object.entries(obJStore).flat().join("");
console.log(output2);