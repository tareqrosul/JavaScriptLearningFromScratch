# Tuesday, April 26, 2022
##  Control Flow Basics
> In this modern JavaScript tutorial we'll take a look at different ways to control the flow of our code - for loops, while loops, if statements, else if statements, switches and more.

> ### For Loop
```js
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
```

> ### While and Do While
```js
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

```

> ### Conditional Statement 
```js
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
```

> ### Logical Not
```js
// logical not 
let user = false;
if (!user) {
    console.log("you must be the user");
}
console.log(true);
console.log(false);
console.log(!true);
console.log(!false);
```

> ### Break and Continue
```js
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

```
> ### Switch Statement 
```js
const variable_1 = 10;
switch (variable_1==10) {
    case value:
        console.log("its %d",variable_1);
        break;

    default:
        console.log("its something else");
        break;
}
```