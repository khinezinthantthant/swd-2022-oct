const records = [];

function calcArea(width,breadth){
    let area = width * breadth;
    const recordobj ={
        width:width+" ft",
        breadth:breadth+" ft",
        area:area+" sqlt"
    }
    records[records.length]=recordobj;
    return area + " sqft";
}
console.log(calcArea(17,60));
console.log(calcArea(20,40));
console.log(calcArea(50,90));


console.table(records);

