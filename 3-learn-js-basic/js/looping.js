// for(let i = 1; i<=3 ; i++){
//     // console.log('a');
//     // console.log('b');
//     // console.log('c');

//     // if(i === 3) break;
//     if(i === 3) continue;
//     console.log(i,'******');
// }
// 1start 10 end increment 1
// let i = 1; i<=10 ; i++;

// const letters =["a","b","c","d","e","f"];

// for(let i=0; i< letters.length; i++){
//     console.log("index ",i,"---",letters[i]);
// }

// const marks=[54,70,96,85,90,65];
// let totalmark =0;

// for(let mark=0; mark < marks.length; mark++){
//     console.log(marks[mark]);   
//     totalmark +=marks[mark];
// }
// console.log(" total : ",totalmark);
// totalMarks
// pass or fail 

// const mgmgInfos ={
//     name:'mg mg',
//     age:15,
//     marks:[
//         {
//             id:1,
//             subject:'Myanmar',
//             mark:20
//         },
//         {
//             id:2,
//             subject:'English',
//             mark:78
//         },
//         {
//             id:3,
//             subject:'Math',
//             mark:20
//         },
//         {
//             id:1,
//             subject:'Chem',
//             mark:85
//         },
//         {
//             id:1,
//             subject:'Phy',
//             mark:90
//         },
//         {
//             id:1,
//             subject:'Bio',
//             mark:60
//         }
//     ]
// };

// // အချက်အလက်တွေထည့်ဖို့
// mgmgInfos.totalMarks =0;
// mgmgInfos.results = {};  

// // mgmgInfos.results.myanmar="success";
// // mgmgInfos.results.english="success";

// for(let i =0; i<mgmgInfos.marks.length; i++){
//     console.log(mgmgInfos.marks[i].mark);

//     // information ရှာတာ
//     mgmgInfos.totalMarks +=mgmgInfos.marks[i].mark;

//     //pass or fail စစ်တာ
//     // mgmgInfos.results[mgmgInfos.marks[i].subject] = mgmgInfos.marks[i].mark >= 40 ? 'success' : "fail";

//     if(mgmgInfos.marks[i].mark >= 40){
//         mgmgInfos.results[mgmgInfos.marks[i].subject] ='success';
//     }else{
//         mgmgInfos.results[mgmgInfos.marks[i].subject] ='fail';
//     }
// }


// console.log(mgmgInfos.results);
// console.log("total mark : ", mgmgInfos.totalMarks);

// console.log(mgmgInfos);
// console.log(mgmg.marks[3].mark);


// function starGenerator(count,element="*"){
//     let star ='';
//     for(var i=1;i<=count;i++){
//         star+=element;
//     }

//     return star;

// }
// console.log(starGenerator(4,"= "));



// for(let i=1;i<=6;i++){
    // let star ="";
    // for(let x=1; x<=i;x++){
    //     star +="* ";
    // }
    // console.log(star,i);

    // console.log(starGenerator(i,"x "));
// }

// for(let i =6; i>=1; i--){
    // let star="";
    // for(let x=1; x<=i;x++){
    //     star +='* ';
    // }
    // console.log(star,i);

    // console.log(starGenerator(i,'= '));
// }

// for(let i=1;i<=6;i++){
//     // console.log(i);
    
//     // console.log(starGenerator(i,i%2 === 0 ? "* " : "= "));

//     if(i%2 === 0){
//         console.log(starGenerator(i,"* "));
//     }else{
//         console.log(starGenerator(i,"= "));
//     }
// }




// Homework

// shopကုပြန်ရေး

// rating

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

for(let i=0;i<ratings.length;i++){
    let result ='';
    for(let x=1;x<=5;x++){
        if(x<=ratings[i].rate){
            result+="* ";
        }else{
            result+="- ";
        }
    }
    console.log('id :',ratings[i].id,' | ','rating',result,' | ',ratings[i].rate,' | ',ratings[i].name);
}

// for(let i = 1;i<= 5; i++){
//     let result ='';
//     for(let x=1;x<=5;x++){
//         // if(x <= i){
//         //     result+="* ";
//         // }else{
//         //     result+="- ";
//         // }

//         result += x<=i ? "* " : "- ";
//     }
//     console.log(result,i);
// }