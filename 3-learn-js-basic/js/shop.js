const fruits = {
    apple: 100,
    orange:120,
    mango:200,
    banana:30
};

// tex = 5% tax 
// 100 mmk = 5mmk  
// 5% = 100 * 0.05;
// 700 5% = 700 * 0.05;

let total =0;

function tax(amount,taxRate =5){
    return amount  * taxRate / 100;
}

function buy(fruitname,quantity){
    let cost = quantity * fruits[fruitname] ;
    // let actualcost = cost + tax(cost);
    total +=cost;
    return fruitname +" : "+quantity+" : " + cost + " MMK";
    return `${ fruitname} : ${quantity} : ${cost}`;
}


console.log(buy('orange',5));
console.log(buy('apple',2));
console.log(buy('mango',3));
console.log(buy('banana',15));


console.log("Total Cost : ", total , " MMK");
console.log("Tax : ", tax(total) , " MMK");
console.log("Net Total : ",total+ tax(total), " MMK");



// console.log(tax(700));