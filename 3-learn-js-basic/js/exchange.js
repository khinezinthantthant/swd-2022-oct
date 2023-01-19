const rates ={
    usd : 2400,
    sgd : 1400,
    eur : 2100
};

// 500usd to  ?mmk
// 1usd = 2400mmk

// from usd to mmk 
function usdtommk(inputusd){
    return (inputusd * rates.usd) +" MMK";
}

// from any currency to mmk 
function tommk(inputAmount,fromcurrency){
    return (inputAmount * rates[fromcurrency]) +" MMK";
}

// from mmk to any currency 
function tocurrency(inputmmk,currency){
    return (inputmmk / rates[currency]) + currency;
}

// from any currency to any currency 
// 500sgd to ? usd

function toAnyCurrency(inputAmount,fromcurrency,tocurrency){
    let mmk = inputAmount * rates[fromcurrency];
    let result = mmk / rates[tocurrency];

    return result + tocurrency;
}

// console.log(toAnyCurrency(500,'sgd','usd'));
// console.log(toAnyCurrency(1,'sgd','sgd'));
// console.log(toAnyCurrency(50,'eur','usd'));


// console.log(usdtommk(500));
// console.log(tommk(500,"usd"));
// console.log(tommk(500,"sgd"));
// console.log(tommk(500,"eur"));

// console.log(tocurrency(1200000,'usd'));
// console.log(tocurrency(700000,'usd'));
// console.log(tocurrency(1050000,'usd'));


