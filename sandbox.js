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