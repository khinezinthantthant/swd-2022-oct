//select element
const result = document.getElementById("result");
const store = document.getElementById("store");
const clear = document.getElementById("clear");
const width = document.getElementById("width");
const breadth = document.getElementById("breadth");
const calculate = document.getElementById("calculate");
const records = document.getElementById("records");

// functions 
const run = (x,y) => x+y;

const clearResult = () => {
    // console.log("Clear Result Function");
    result.innerText = null;
};



// process 
const calcArea = () => {
    // console.dir(width);
    // console.log(width.value , breadth.value);
    // console.log("calcArea Function");

    const area = width.valueAsNumber * breadth.valueAsNumber;

    // calc 
    result.innerText = (`w:${width.value} ft * b: ${breadth.value} ft = ${area} sqft`);

    // remove value
    // width.value = breadth.value = null;
    width.valueAsNumber = breadth.value =0;
}

calculate.onclick = calcArea;

clear.onclick = clearResult();

const storeResult = () => {
    // console.log("storeResult Function");

    records.innerHTML +=`<li>${result.innerText}</li>`;
    clearResult();
}

store.onclick = storeResult;