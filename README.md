# The one with the ArrayMethods

> ## filter() method
```js
const scores = [10,30,15,25,50,40,5];
//filter is non destructive ,means it does'nt change te actual array
const x =scores.filter((score)=>{
    return score>20;
})
console.log(x);

const users=[
{name:'shaun',premium:true},
{name:'yoshi',premium:false},
{name:'mario',premium:false},
{name:'chun-li',premium:true}
];

const permiumUser = users.filter((user)=>user.premium)

```


> ## map() method
```js
const prices = [20,10,30,25,15,40,80,5];
const salePrices = prices.map(price=>price/2);
console.log(salePrices);

const products = [
    {name: 'gold star', price: 20},
    {name: 'mushroom', price: 40},
    {name: 'green shells', price: 30},
    {name: 'banana skin', price: 10},
    {name: 'red shells', price: 50}
  ];

  const newPrice= products.map((product)=>{
    if(product.price>30){
        // return product.price=product.price/2   //dont do it
        return {name:product.name,price:product.price/2}
    }
    else{
        return product;
    }
});

``` 
### Skipped some boring stuffs 