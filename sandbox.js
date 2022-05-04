const copy = document.querySelector('.copy-me');
copy.addEventListener('copy',()=>{
    console.log("OI my content is copyright");
});

const box = document.querySelector('.box');

box.addEventListener('mousemove',(e)=>{
    console.log("mouse hovering");
    // const mX = e.clientX / window.innerWidth * 360
    // console.log(mX);
    // console.log(e.offsetX,e.offsetY);
    box.textContent=`xPos-${e.offsetX} yPos-${e.offsetY}`
})

document.addEventListener('wheel',e=>{
    console.log(e.pageX,e.pageY);
})