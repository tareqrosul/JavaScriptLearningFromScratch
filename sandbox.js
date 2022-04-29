// const parragraph = document.querySelector('p');

// console.log(parragraph);

// const errorPara = document.querySelector('.error');

// console.log(errorPara);

// const DivErrorPara = document.querySelector('.error');

// console.log(DivErrorPara);

// const parragraphs = document.querySelectorAll('p');

// console.log(parragraphs);

// parragraphs.forEach(
//     paras=>{
//         console.log(paras);
//     }
// );


// //get an element by id
// const title = document.getElementById("page-title");
// console.log(title)
// //get elements by their class name
// const errors = document.getElementsByClassName('error')
// console.log(errors);
// console.log(errors[0]); //can not use for each method for htmlcollection

// get elements by their tag name
/* const paras = document.getElementsByTagName('p')
console.log(paras);
console.log(paras[0]); */

// const firstPara = document.querySelector('p');
// console.log(firstPara.innerText);
// firstPara.innerText += " NInjas are awesome"

// const paras = document.querySelectorAll('p');
// paras.forEach((para, number)=>{
//     para.innerText+= ' '+number;
//     console.log(para.innerText)
// })

const content = document.querySelector('.content');
// console.log(content.outerHTML); 
// content.innerHTML = '<h2>This is a new h2</h2>'+content.innerHTML

const people = ['Mario','Luigi','Yoshi']

people.forEach(person =>{
    content.innerHTML += `<p> This is ${person}</p>`
})