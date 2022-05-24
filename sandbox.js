// fetch api 

// fetch('one.json').then((result) => {
//     console.log(result);
//     return result.json();
// }).then(data=>{
//     console.log(data);
// }).catch((err) => {
//     console.log(err);
// });


// async and await 
const toDos = async ()=>{
    const response= await fetch('one.json');
    if (response.status !== 200) {
        throw new Error('naam vuul ase')
    }
    const data = await response.json();
    return data;
};
toDos()
.then(data=>console.log(data))
.catch(err=>console.log(err.message));
