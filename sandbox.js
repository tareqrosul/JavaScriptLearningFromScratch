/*function helloWorld(name) {
    console.log("hello world %s",name);
}
helloWorld("Tareq");
console.log("Hi there");*/

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