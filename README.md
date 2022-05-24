
[a relative link](detail.md)
>This is before jason lecture
```js
// fetch('https://jsonplaceholder.typicode.com/todos/1')
//   .then(response => response.json())
//   .then(json => console.log(json))

//https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest/readyState

```
```js
const getTodos = (callBack)=>{
    const request = new XMLHttpRequest();

    request.addEventListener('readystatechange',()=>{
        // console.log(request,request.readyState);
        if (request.readyState===4 && request.status === 200) {
            // console.log(request.responseText);
            callBack(undefined,request.responseText);
        }
        else if (request.readyState === 4){
            // console.log('could not fetch the data');
            callBack('could not fetch data',undefined);
        }
    });
    
    
    request.open('GET','https://jsonplaceholder.typicode.com/todos/');
    
    request.send();
    
};

```

```js
console.log(1);
console.log(2);

getTodos((err,data)=>{
    console.log('callback fired');
    if (err) {
        console.log(err);
    } else {
        console.log(data);
    }
});

console.log(3);
console.log(4);
```
> # _This for importing local json file_
```js
const getTodos = (callBack)=>{
    const request = new XMLHttpRequest();

    request.addEventListener('readystatechange',()=>{

        if (request.readyState===4 && request.status === 200) {
            const data = JSON.parse(request.responseText)
            callBack(undefined,data);
        }
        else if (request.readyState === 4){

            callBack('could not fetch data',undefined);
        }
    });
    
    request.open('GET','todos.json');
    
    request.send();
    
};
```

```js
getTodos((err,data)=>{
    console.log('callback fired');
    if (err) {
        console.log(err);
    } else {
        console.log(data);
    }
});
```

> # _Getting Multiple json file one after another using callback hell_
```js
const getTodos = (resource,callBack)=>{
    const request = new XMLHttpRequest();

    request.addEventListener('readystatechange',()=>{

        if (request.readyState===4 && request.status === 200) {
            const data = JSON.parse(request.responseText)
            callBack(undefined,data);
        }
        else if (request.readyState === 4){

            callBack('could not fetch data',undefined);
        }
    });
    request.open('GET',resource);
    
    request.send();
    
};

```
>callback hell
```js
getTodos('one.json',(err,data)=>{
    console.log(data);
    getTodos('two.json',(err,data)=>{
        console.log(data);
        getTodos('three.json',(err,data)=>{
            console.log(data);
        });
    });
});
```

>A Promise is an object representing the eventual completion or failure of an asynchronous operation.
>A promise is a returned object to which you attach callbacks, instead of passing callbacks into a function.

> # Promise Example
```js
const getSomething =()=>{

    return new Promise((resolve,reject)=>{
        // fetch something 
        // resolve('some data');
        reject('some error');
    });
}
```

```js
// getSomething().then((data)=>{
//     console.log(data);
// },(err)=>{
//     console.log(err);
// });

getSomething().then(data=>{
    console.log(data);
}).catch(err=>{
    console.log(err);
})

```

> # _Chaining Promises_

```js
const getTodos = (resource)=>{
    return new Promise((resolve,reject)=>{
      
        const request = new XMLHttpRequest();

        request.addEventListener('readystatechange',()=>{   
            if (request.readyState===4 && request.status === 200) {
                const data = JSON.parse(request.responseText)
                resolve(data);
            }
            else if (request.readyState === 4){
    
                reject('Failed to get data')
            }
        });
        request.open('GET',resource);        
        request.send();
    });  
};

```
```js
// getTodos('one.json').then(data=>{
//     console.log(data);
//     getTodos('two.json').then(data=>{
//         console.log(data);
//     }).catch(error=>console.log(error))
// }).catch(error=>console.log(error))

getTodos('one.json').then(data => {
    console.log('Proimise 1 resolved ',data);
    return getTodos('two.json');
}).then(data=>{
    console.log('Proimise 2 resolved ',data);
    return getTodos('three.json');
}).then(data=>{
    console.log('Proimise 3 resolved ', data);
}).catch(error=>console.log(error));

```
