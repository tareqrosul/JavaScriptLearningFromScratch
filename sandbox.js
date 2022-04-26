const blogs=[
    {title:'Why mac and cheese',likes:30},
    {title:'10 things to make with marmaite',likes:50},
];

//creating a new object using obejct literal notation
let user = {
    name_ : 'crytal',
    age : 30 ,
    email : 'crystal@gmsil.com',
    location : "berlin",
    blog:[
        {title:'Why mac and cheese',likes:30},
        {title:'10 things to make with marmaite',likes:50}
    ],
    loggin : function(){
        console.log("The user logged in");
    },
    logout : function(){
        console.log("The user logged out");
    },
    logBlogs: function(){
        // console.log(this.blog);
        // console.log(this);
        console.log('This user has written the following blogs');
        this.blog.forEach((blogss)=>{
            console.log(blogss);
        });
    },
    canDoThis(){
        console.log("We also can do this");
    }
};
console.log(user);
console.log(user.name_);

user.age =35;
console.log(user['age']);
user.loggin();

user.logBlogs();

// math Object
console.log(Math);
One= 50;
two = One;
console.log(One,two);
One= 40;

console.log(One,two);


userOne = {name :'Tareq',age:26};
userTwo= userOne
console.log(userOne,userTwo);
userOne.name='Rosul';
console.log(userOne,userTwo);

