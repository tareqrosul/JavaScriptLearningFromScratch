const form = document.querySelector('.signup-form');
// const username = document.querySelector("#username")
const feedback = document.querySelector('.feedback');

form.addEventListener('submit',(e)=>{
    e.preventDefault();
    // console.log(username.value);
    //id of the input form
    // console.log(form.username.value);
    const username = form.username.value;
    
    if (userNamePattern.test(username)){
        //feedback good info

    }else{
        //feed back help info
        feedback.style.color='crimson';
        feedback.textContent='username must contain letters and only be between 6 & 12 characters long';
    }
});

const username = 'shauns';
const pattern = /[a-z]{6,}/;

let results = pattern.test(username);
console.log(results);

//live feedback
form.username.addEventListener('keyup',(e)=>{
    // console.log(e.target.value,form.username.value);
    const userNamePattern = /^[a-zA-Z]{6,12}/;
    if (userNamePattern.test(e.target.value)) {
        console.log('passed');
        form.username.setAttribute('class','success');
        form.setAttribute('class','success');
    }else{
        console.log('failed');
        form.username.setAttribute('class','error');
        form.setAttribute('class','error');
    }
});

