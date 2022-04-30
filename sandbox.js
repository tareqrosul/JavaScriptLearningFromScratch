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

// const content = document.querySelector('.content');
// // console.log(content.outerHTML); 
// // content.innerHTML = '<h2>This is a new h2</h2>'+content.innerHTML

// const people = ['Mario','Luigi','Yoshi']

// people.forEach(person =>{
//     content.innerHTML += `<p> This is ${person}</p>`
// })
/*
const link = document.querySelector('a');

console.log(link.getAttribute('href'));
link.setAttribute('href','https://www.youtube.com');
link.innerText='The youtube channel';

const mssg = document.querySelector('p');
console.log(mssg.getAttribute('class'));
mssg.setAttribute('class','success');
console.log(mssg.getAttribute('class'));

mssg.setAttribute("style","color:green")

const title = document.querySelector('h1')
console.log(title.style);
console.log(title.style.color);
title.style.margin= '50px'
title.style.color= 'crimson'
title.style.fontSize='99px'

title.style.margin='';
*/

// const newContent = document.querySelector('p');

// console.log(newContent.classList);
// newContent.classList.add('error');
// newContent.classList.remove('error');
// newContent.classList.add('success');
const newContent = document.querySelectorAll('p');
console.log(newContent);
newContent.forEach(tag=>{
    if(tag.textContent.includes('success')){
        tag.classList.add('success');
    }
    else if (tag.textContent.includes('error')){
        tag.classList.add('error');
    }
    else{
        tag.classList.add('nothing');
    }
})

// let x ='lorem error ipsum';
// if( x.includes('error')){
//     console.log('yes');
// }
// toggle a class

const title = document.querySelector('.title')
title.classList.toggle('hello');
title.classList.toggle('hello');
// title.classList.toggle('title');
