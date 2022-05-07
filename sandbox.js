const correctAnswer = ['B','B','B','B'];
const form = document.querySelector('.quiz-form');
const span = document.querySelector('span');
const result = document.querySelector('.result')
form.addEventListener('submit', e=>{
    e.preventDefault();
    let score= 0;
    const userAnswer=[form.q1.value,form.q2.value,form.q3.value,form.q4.value];
    // console.log(userAnswer);
    //check answer
    userAnswer.forEach((answer,index)=>{
        if (answer===correctAnswer[index]) {
            score+=25;
        }
    })
    window.scrollTo(0,0);
    result.classList.remove('d-none')
    // span.innerText=score+'%';
    let output = 0;
    const timer = setInterval(()=>{
        span.innerText=`${output}%`;

        if (output===score) {
            clearInterval(timer);
        }else{
            output++;
        }
    },10);
});
window.setTimeout(()=>{
window.alert('Hellow Ninjas');
},3000);//we can do this without calling the window object


i = 0;
const timer=setInterval(()=>{
console.log('Hello');
i++;
if (i===5) {
    console.log(timer);
    clearInterval(timer);
}
},1000);