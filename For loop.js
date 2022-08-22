// odinary method of looping
for(let i = 0;i < 10; i++){
	console.log("Hello Hitesh");
}

// 1
const states =["Maharastra","Bengal","Kerala","Goa"];

// 0
const myStates =[
    "Maharastra",
    "Bengal",
    "Kerala",
    "Goa",
    112
];
// hero trick
for(let i = 0; i<myStates.length; i++){
 console.log(states[i]);   
}

for(let i=0; i< myStates.length;i++) {
    if (typeof myStates[i] !=="string") continue;
    console.log(myStates[i]);
}

for(let i=0; i< myStates.length;i++) {
    if (typeof myStates[i] !=="string") break;
    console.log(myStates[i]);
}

// continue and break keywords is use for scope


// dowhile loop

let i = 20;

do{
	console.log(i);
} while (i < 10);

// mostly is used in hardware domain when n case of excuting once the wrong code