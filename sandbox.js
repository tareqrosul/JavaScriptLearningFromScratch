// for loops

for(let i = 0;i<11;i++){
    console.log(i)
}

const names = [
    'Tareq','Rosul','Wahid'
];

for(let i = 0; i< names.length;i++){
    let name = `<div> ${names[i]}</div>`
    console.log(name);
}


// while loop

let n = 10;
 while(n>0){
    console.log(n);
    n--;
 }
// do while loop
let does= 10;
 do {
     console.log(does);
     does--;
 } while (does>=10);

//  Condition statements
let ppp = 10;

if (ppp == 10) {
    console.log('ppp:>> %d', ppp);
}else {
    console.log("everything is fine btw");
}

console.log(`Hi there ${ppp}`);


const password = 'ThisIsAPas';
// const password = 'ThisIsAPassword';
console.log('password.length :>> ', password.length);

if (password.length>=12) {
    console.log("password is mighty strong");
} else if (password.length>=8){
    console.log("that password is strong enough");
}
else{
    console.log("Not enough long");
}

// logical not 
let user = false;
if (!user) {
    console.log("you must be the user");
}
console.log(true);
console.log(false);
console.log(!true);
console.log(!false);


// break and continue
const score =[50,25,0,30,100,20,10];

for (let i = 0; i < score.length; i++) {
    const element = score[i];
    if (element===0) {
        continue;
    }
    console.log("your score is %d",element);
    if (element===100) {
        console.log("Congracts you have got the top score");
        break;
    }
}

// switch statement
const variable_1 = 10;
switch (variable_1==10) {
    case value:
        console.log("its %d",variable_1);
        break;

    default:
        console.log("its something else");
        break;
}

