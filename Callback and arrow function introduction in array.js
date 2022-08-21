var country = ['india', 'pakistan', 'china', 'chile', 'usa'];

console.log(Array.from('pakistan'));

console.log(country.indexOf('usa'));


// 1
function isEven (element) {
    if(element %2 === 0){
        return true;
    }
    return false;
}

console.log(isEven(2));
// 2
function isEven (element) {
    return element %2 === 0;
}

console.log(isEven(5));

// 3
var result = [2,4,6,8].every(isEven);
console.log(result);

// 4
var result = [1,2,4,6,8].every((e) => {
    return e %2 === 0;
});
console.log(result);

// 5
var result = [2,4,6,8].every((e) => e %2 === 0);
console.log(result);
// ----------------------------------------------------------------------------

function isEven(e){
    return e % 2 === 0;
}

var rst = [2,4,6,8].every(isEven);
console.log(rst);

// callback

var num = (element) =>{
    return element % 2 === 0;
}

var rst = [2,4,6,8].every(num);
console.log(rst);

// arrow function callback

var rlt = [2,4,61,8].every((ee) => {
    return ee % 2 === 0;
});
console.log(rlt);
