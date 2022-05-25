#  Syntax Basics & Types


> In this modern JavaScript tutorial we'll take a look at the lanvguage syntax - comments, semicolons, using variables etc. We'll also discuss some of the types in JavaScript - strings, numbers, null, undefined, & booleans

> # Declare Variables and Printing them

```js
alert("Hello, World,This is Tareq*");
```

```js
let age = 25;
let year = 2021;
console.log("The age is ",25," And The year is ",year);
```
```js
//This is older vesion of declaring a variale
var score=75;
console.log(score)
```
> ### String

```js
// String Concatenation
let firstName = 'Tareq';
let lastName = 'Rosul';
let fullName = firstName +' '+lastName;

console.log(fullName);
console.log(fullName[0]);
console.log(fullName.length);
```
> ### Common string methods

```js
let res= email.lastIndexOf('r')
console.log(res);

let r1= email.slice(0,10);
console.log(r1);
// let r2 = email.substr(0,10);
let r2 = email.substring(0,10);
console.log(r2);


console.log(email.replace('@','#'));//replaces only the frist character
```
> ### Numbers
```js
let radius= 10;
const pi = 3.14156;
console.log(2*pi*radius);
console.log(10/20);
console.log(radius % 3);
//area of a square
console.log(pi * radius**2);


let likes= 10; 
likes++;
console.log(likes);
likes += 1;
console.log(likes);
likes--;
console.log(likes);
```
> ### Concatenate number
```js
const title = 'Best reads of 2021';
const author = 'Mario';
const like = 30;

//concatenation way
let resl = 'The blog called ' +title+' by '+author+' has '+likes + ' likes.'
console.log(resl);
//template string way or template literal
res = `The blog called ${title} by ${author} has ${likes} like`;
console.log(resl);
// creating html templates
let html = `
<h2>${title}</h2>
<p>By ${author}</p>
<span>This blog has ${likes}</span>
`;
console.log(html);
```

> ### Arrays
```js
console.log("Now We'll learn about Arrays");
let ninjas = ['Tareq','Rosul','Wahid'];
console.log(ninjas);
console.log(typeof ninjas);
console.log(typeof ninjas[0]);


let random = ['shaun','crystal',30, 80];
console.log(random);

console.log(ninjas.length);

let names = ninjas.join(' ');
console.log(names);
console.log(names.indexOf('Tareq'));
let r4 = ninjas.concat(['Molla']);
console.log(r4);
let r5 = ninjas.push('Molla');
console.log(ninjas);
console.log(r5);
r5 = ninjas.pop('Molla');
console.log(r5);
```