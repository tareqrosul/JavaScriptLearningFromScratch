// fetch('https://jsonplaceholder.typicode.com/todos/1')
//   .then(response => response.json())
//   .then(json => console.log(json))

//https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest/readyState

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
    
    
    // request.open('GET','https://jsonplaceholder.typicode.com/todos/');
    request.open('GET',resource);
    
    request.send();
    
};
// promise example

const getSomething =()=>{

    return new Promise((resolve,reject)=>{
        // fetch something 
        // resolve('some data');
        reject('some error');
    });
}

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


