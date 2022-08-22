var user = {
    firstName:"Hitesh",
    lastName:"Bhagwat",
    loginCount:10,
    fackbookSignedIn:true,
};

console.log(user.firstName); //general use
console.log(user["lastName"]); //object should be in string format

user.loginCount = 30;
console.log(user.loginCount);
console.table(user);

// Exercise to make an object iphone with properties

var iPhone = {
    modelNumber:"IOS5248555XTEHS",
    OSversion:"15.2v",
    lastUpdate:"13/10/1998",
    Camera:55.6,
    EarphoneJack:true,
};
console.table(iPhone);