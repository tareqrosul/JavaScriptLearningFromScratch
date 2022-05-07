# This is where i made a little quiz project
> window.setInterval ***and*** window.clearInterval

```js
i = 0;
const timer=setInterval(()=>{
console.log('Hello');
i++;
if (i===5) {
    console.log(timer);
    clearInterval(timer);
}
},1000);
```
> window.setTimeout
```
window.setTimeout(()=>{
window.alert('Hellow Ninjas');
},3000);//we can do this without calling the window object

```