//  conditional statement 
// control structure 
// flow control / control flow 

 
 if(true){
    console.log('this is true');
 }else{
    console.log('this is false')
 }


 function canicome(wakeuptime){
    // မနက်၉ နာရီကျောင်းတက်ပါတယ်
    // ၉နာရီမတိုင်ခင်ကျောင်းတက်ရ
    // ၉နာရီကျော်ရင်ကျောင်းမဝင်ရ

    let result;

    // if(wakeuptime <= 9){
    //     result ='အတန်းထဲဝင်ပါ';
    // }else{
    //     result ='အတန်းထဲ မဝင်ပါနဲ့';
    // }

    if(wakeuptime <= 9){
        return 'အတန်းထဲဝင်ပါ';
    }
        return 'အတန်းထဲ မဝင်ပါနဲ့';

 }

console.log(canicome(8));
console.log(canicome(9.3));



let mark = 30;

if(mark >= 80){
    console.log('Distinction');
}else if(mark >= 40){
    console.log('Pass');
}else if(mark <= 40){
    console.log('Fail');
}