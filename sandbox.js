// These were for learing to declare Variables and Printing them

// alert("Hello, World,This is Tareq*");

let age = 25;
let year = 2021;
console.log("The age is ",25," And The year is ",year);

const points =100;
// points =50;
console.log(points);
//This is older vesion of declaring a variale
var score=75;
console.log(score);

//Strings
console.log('Hello, World');
let email = 'tareqrosul@gmail.com';
console.log(email);
// String Concatenation
let firstName = 'Tareq';
let lastName = 'Rosul';
let fullName = firstName +' '+lastName;
console.log(fullName);

console.log(fullName[0]);
// String Length
console.log(fullName.length);
// String Methods
console.log(fullName.toUpperCase());
let result = fullName.toLocaleLowerCase();
console.log(result+' '+fullName);


let index = email.indexOf('@');
console.log('index of @ in the email is '+index);

//common string methods
let res= email.lastIndexOf('r')
console.log(res);

let r1= email.slice(0,10);
console.log(r1);
// let r2 = email.substr(0,10);
let r2 = email.substring(0,10);
console.log(r2);


console.log(email.replace('@','#'));//replaces only the frist character
console.log(' ');
console.log("Now We'll learn about NUMBERS");

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

// concatenate number
console.log('The blog has '+likes+ ' likes');

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


// Now we'll learn Array
console.log("Now We'll learn about Arrays");
let ninjas = ['Tareq','Rosul','Wahid'];
console.log(ninjas);
console.log(typeof ninjas);
console.log(typeof ninjas[0]);
//It can be overrideen sameway like other languages 

let boyos = [20,30,40,50];

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