const textInput = document.querySelector("#textInput");
const createBtn = document.querySelector("#createBtn");
const lists = document.querySelector("#lists");

const total = document.querySelector("#total");
const doneTotal = document.querySelector("#doneTotal");

const data = ["min ga lar par","morning","god night"];

const counter = () => {
    const totalCount = lists.children.length;
    const doneTotalCount = [...lists.children].filter(
        (el) => el.querySelector(".form-check-input").checked === true
        ).length;

    total.innerText = totalCount;
    doneTotal.innerText = doneTotalCount;
}

const createLi = (text) => {
    const dynamicId = "checkedId"+Math.random();

    const li = document.createElement("li");
    li.className = "list-group-item d-flex align-items-center";
    li.innerHTML = `
    <div class="form-check">
        <input id="${dynamicId}" type="checkbox" class="form-check-input" onchange="done(event)">
        <label for="${dynamicId}" class="form-check-label">
        ${text}
        </label>
    </div>
    <div class="ms-auto">
        <button class="btn btn-danger btn-sm " onclick="edit(event)">Edit</button>
        <button class="btn btn-danger btn-sm " onclick="del(event)">Del</button>
    </div>
`;

return li;
}


data.forEach((d) => {
    // console.log(d);
    lists.append(createLi(d));
});


const addList = () => {
    if(textInput.value.trim()){
        lists.append(createLi(textInput.value));
        textInput.value = null;

    counter();

    }else{
        alert("Input is empty");
    }
    
}

const del = (event) => {
    if(confirm("Are you sure to delete")){
        event.target.closest(".list-group-item").remove();
        counter();
    }
}

const done = (event) => {
    event.target.nextElementSibling.className ="text-decoration-line-through";
    counter();
}

const edit = (event) => {
   const old = event.target.closest(".list-group-item").querySelector(".form-check-label");
   const newText = prompt("Input New Text",old.innerText);
   
   if(newText && newText.trim()){
    old.innerText = newText;

   }
}

createBtn.addEventListener("click",addList);
textInput.addEventListener("keyup",(event) => {
    if(event.keyCode === 13){
        addList();
    }
});


window.addEventListener("load",counter);