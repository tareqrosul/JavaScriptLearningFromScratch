// const art = document.querySelector('article');
// // console.log(art.children);

// // console.log(Array.from(art.children));
// // Array.from(art.children).forEach((child)=>{
// //     child.classList.add('diyedilam')
// // });

// const title = document.querySelector('h1');

// // console.log(title.parentElement);
// console.log(title.previousSibling);

const ul = document.querySelector('ul');
const newElement = document.querySelector("#newElement");
newElement.addEventListener('click',addNewList);
function addNewList(){

    // ul.innerHTML +='<li id="myP">new item</li>';
    const li = document.createElement('li');
    li.textContent = 'something new ';
    ul.prepend(li)    
 }

const button = document.querySelector('Button');
// const items = document.querySelectorAll('#myP');

// items.forEach(list=>{
//     list.addEventListener('click',e=>{
//         // console.log(e.target);
//         // e.target.style.textDecoration='line-through';
//         // e.target.style.background='black';
//         // e.target.style.color='white';
//         // e.target.style.visibility='hidden';
//         e.stopPropagation();
//         console.log("event in LI");
//         e.target.remove();
//     })
// });
button.addEventListener('click',(e)=>{
    console.log(e.target);
    // const a = document.querySelectorAll('li'); // lagbena
    items.forEach(list=>{

        list.style.visibility = "visible";
    });
});

ul.addEventListener('click',e=>{
    // console.log('event in ul');
    if(e.target.tagName=='LI'){
        e.target.remove();
    }
});

//Marvel Studios’ Legends