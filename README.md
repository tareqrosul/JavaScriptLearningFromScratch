## In this chapter I learned making a to do list 
>This todo app contains the features of 
>adding todo tasks
>delete them 
>and search them

### Adding new tasks
```js
  const addForm = document.querySelector('.add');

  const ehaUl = document.querySelector('.todos');

  const search = document.querySelector('.search input');
```

```js

addForm.addEventListener('submit',e=>{
    e.preventDefault();
    const toDO = addForm.add.value.trim();
    if (toDO.length) {
        generateTemplate(toDO);
        addForm.reset();
    }
});

const generateTemplate = toDO=>{
    // console.log(toDO);
    const template=`
    <li class="list-group-item d-flex justify-content-between align-items-center">
    <span>${toDO}</span>
    <i class="far fa-trash-alt delete"></i>
    </li>
    `;
    ehaUl.innerHTML+=template;
}

```
### delete todos
``` js
// delete todos
ehaUl.addEventListener('click',e=>{
    if (e.target.classList.contains('delete')) {
        e.target.parentElement.remove();
    }
});

```

### Searching todos
```js
// keyup event 
search.addEventListener('keyup',(e)=>{
    const term = search.value.trim().toLowerCase();
    fileterTodos(term);
    //console.log(term);
})
```

### This one is complicated

```js
const fileterTodos= term =>{
    Array.from(ehaUl.children)
    .filter(todo=>!todo.textContent.includes(term))
    .forEach(todo=>todo.classList.add('filtered'));

    Array.from(ehaUl.children)
    .filter(todo=>todo.textContent.includes(term))
    .forEach(todo=>todo.classList.remove('filtered'));
};

```
>Main View

<img src="images/screenshot.png" alt="this is a screenshot" style="  display: block;
    margin-left: auto;
    margin-right: auto;
    width: 50%;">

>Deleting Task

<img src="images/screeenshot2.png" alt="this is a screenshot" style="  display: block;
    margin-left: auto;
    margin-right: auto;
    width: 50%;">

>Searching task

<img src="images/s3.png" alt="this is a screenshot" style="  display: block;
    margin-left: auto;
    margin-right: auto;
    width: 50%;">

> Mobile View

<img src="images/s4.jpeg" alt="this is a screenshot" style="  display: block;
    margin-left: auto;
    margin-right: auto;
    width: 50%;">