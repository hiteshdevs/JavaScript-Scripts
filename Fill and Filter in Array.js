// fill
var testArray = [2, 3, 4, 5, 7, 8, 9]

console.log(testArray.fill('h', 2));

console.log(testArray.fill('2'));

// filter
// const myNumber = [12, 22, 45, 67, 35, 98, 64];

// const result = myNumber.filter((num) num => != 55);

// console.log(result);


const ages = [32, 33, 16, 40];
const result = ages.filter(checkAdult);

function checkAdult(age) {
  return age >= 18;
}

console.log(result);