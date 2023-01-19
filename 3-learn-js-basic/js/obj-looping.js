const fruits = ['apple','orange','mango','banana','garpe','lemon','coconut'];

// for(let i=0; i<fruits.length ; i++){
//     // console.log(fruits[i]);
// }

// for(fruit of fruits){
//     console.log(fruit);
// }

// for(index in fruits){
//     console.log(index,fruits[index]);
// }

// const mgmginfo ={
//     name:'mg mg',
//     age:15,
//     job:'student'
// };

// for(key in mgmginfo){
//     console.log(key,mgmginfo[key]);
// }


const ratings =[
    {
        id:1,
        name:'mg mg',
        rate:3
    },
    {
        id:2,
        name:'kyaw kyaw',
        rate:5
    },
    {
        id:3,
        name:'zaw zaw',
        rate:1
    },
    {
        id:4,
        name:'mya mya',
        rate:3
    },
    {
        id:5,
        name:'hla hla',
        rate:4
    },
    {
        id:6,
        name:'ko ko',
        rate:2
    },
    {
        id:5,
        name:'hein htet',
        rate:4
    }
];


for(rating of ratings){
    // console.log(rating);
    // console.log(rating.id,rating.name,rating.rate);
    for(key in ratings){
        console.log(key,ratings[key]);
    }
    console.log("----------------");
}

