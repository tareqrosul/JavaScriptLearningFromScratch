
// function declaration
// Supports Hoisting
function greet(){
    console.log("hello there");
}

//function expression where we store function in a variable and at the end we add a semi colon
// does not Support Hoisting
const speak = function(){
    console.log("Good Day");
};
greet();
// greet();
// greet();
// greet();


speak();

/* Arguments and Parameters */

const speak_ = function(name="Rosul",time="night"){
    // console.log("Good Day %s",name);
    console.log(`Good ${time} ${name}`);
}
speak_();
speak_("Tareq","afernoon");
speak_("Tareq");

/* Returning Values */

const calcArea = function(radius){
/*     let area = Math.PI * radius**2;
    return area; */
    return Math.PI * radius**2;
};

console.log(calcArea(3));

const area = calcArea(4);
console.log(area);



// Arrow Function
// Cleaner and shorter way to write a function

const calcAreaOfSquare = length=>{//we can remove the parentheses if there is onlt one parameter
    return length**2;
};
//if there are more than one parameters or no parameter at all then we will need the fisrt brackets
console.log(calcAreaOfSquare(5));

//Two arguments
const calcAreaOfRectangle = (height,width)=>{return height*width};

console.log(calcAreaOfRectangle(5,4));
//no arguments
const printHello =()=>{console.log("Hello Vai");}
printHello();

//we can return values wihout using the retun keyword

const return_ = eha => eha;
console.log(return_(5));


const salam = () => 'Salam';
console.log(salam());