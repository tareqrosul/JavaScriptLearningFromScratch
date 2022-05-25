# Tuesday, April 26, 2022
##  Functions And Methods
> In this modern JavaScript tutorial we'll take a look at functions - function declarations, function expressions, arrow functions and more...

> ### Different way of declaring Functions
```js
// First Method
function greet(){
    console.log("hello there");
}
greet();
// Second Method
const speak = function(){
    console.log("Say Someting");
};
speak()
```
> JavaScript Hoisting refers to the process whereby the interpreter appears to move the declaration of functions, variables or classes to the top of their scope, prior to execution of the code. Hoisting allows functions to be safely used in code before they are declared. *The firsrt method supports hoisiting and the second method does'nt.*

> ### Argument and Parameter
```js
/* Arguments and Parameters */
const speak_ = function(name="Rosul",time="night"){
    // console.log("Good Day %s",name);
    console.log(`Good ${time} ${name}`);
}
speak_();
speak_("Tareq","afernoon");
speak_("Tareq");
```

> ### Retrung Values
```js
/* Returning Values */

const calcArea = function(radius){
/*     let area = Math.PI * radius**2;
    return area; */
    return Math.PI * radius**2;
};

console.log(calcArea(3));
```

> ## Arrow Functions
```js
// Arrow Function
// Cleaner and shorter way to write a function

const calcAreaOfSquare = length=>{//we can remove the parentheses if there is onlt one parameter
    return length**2;
};
//if there are more than one parameters or no parameter at all then we will need the first brackets
console.log(calcAreaOfSquare(5));
//Two arguments
const calcAreaOfRectangle = (height,width)=>{return height*width};

console.log(calcAreaOfRectangle(5,4));
//no arguments
const printHello =()=>{console.log("Hello Vai");}
printHello();

//we can return values wihout using the return keyword

const return_ = eha => eha;
console.log(return_(5));


const salam = () => 'Salam';
console.log(salam());
```

> ### Callbacks in Action 
```js
let html=``;
const ul = document.querySelector('.people')
let manush =['mario','Luigi','ryu','chaun','chun-li'];
manush.forEach((lok)=>{
    html+= `<li style="color: purple;">${lok}</li>`
}
);
console.log(html);
ul.innerHTML=html;
```

> Callback meaning sending a function as argument 