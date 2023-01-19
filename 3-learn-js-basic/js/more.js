// function canIPassed(examMark,viperMark){
//     if(examMark >= 60 && viperMark >= 60){
//         return 'U Pass';
//     }
//     return 'U Fail'
// }

// console.log(canIPassed(50,60));
// console.log(canIPassed(90,70));
// console.log(canIPassed(80,65));


// function vote(age,nrc){
//     if(age >= 18 && nrc ==='N'){
//         return 'U can vote';
//     }
//     return "U can't vote."
// }

// console.log(vote(17,'m'));
// console.log(vote(18,'n'));
// console.log(vote(18,'N'));
// console.log(vote(19,'n'));

// function canICome(busNo){
//     if(busNo === 65 || busNo === 20){
//         return 'U can reach Kyawt Myaung';
//     }
//     return "U can't reach";
// }

// console.log(canICome(40));
// console.log(canICome(65));
// console.log(canICome(21));
// console.log(canICome(20));


// function food(foodname){
//     if(foodname === 'hotpot' || foodname === 'marlar shan kaw'){
//         return 'I like';
//     }

//     return 'I dislike';
// }

// console.log(food('hotpot'));
// console.log(food('icream'));


// let a=true;
// console.log(a);
// a=!a;
// console.log(a);


// let b='hhz';
// console.log(b);
// b=!b;
// console.log(b);
// b=!b;
// console.log(b);

// let a=true;

// a && console.log('hello') && console.log('hhz');
// a && true && console.log('hhz');

// a && 
// (function(){
//     console.log('hello');
//     return true;
// })() && console.log('hhz');


// function showMyName(name){
//     if(typeof name === 'string') return name;
//     return false;
// }

// console.log(showMyName(18));
// console.log(showMyName('aye aye'));
// console.log(showMyName(['a','b']));
// console.log(showMyName({a:'a',b:'b'}));


// function run(a,b,c){
//     console.log(arguments);
// }

// console.log(run("a","b","c"));

// console.log(window);

// console.dir(document);

// prototype    (ပုံစံငယ်)

// console.log([]);
// console.log({});

// console.dir(EventTarget);
// console.dir(DOMTokenList);
// console.dir(HTMLElement);
// console.dir(NodeList);





// js မှာ while တွေသိပ်မသုံး




// let a="a";
// let b="b";
// console.log(a);

// a="aaa";
// c=a

// console.log(c);

// let a="a";
// console.log(a);
// let c=a;
// console.log(c);
// a="aaa";
// console.log(a);
// console.log(c);


let b=[];
console.log(b);
let c=b;
console.log(c);
b[0]="a";
b[1]="b";
console.log(b);
console.log(c);