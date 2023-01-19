const createBtn = document.querySelector("#createBtn");
const textInput = document.querySelector("#textInput");
const lists = document.querySelector("#lists");

const createLi =(text) =>{
    const checkId = "flexCheck"+Date.now();
    const li = document.createElement("li");

    li.addEventListener("dblclick",edit);

    li.className = "list-group-item d-flex align-items-center";
    li.innerHTML = ` 
    <div class="">
        <input 
        id="${checkId}" 
        type="checkbox" 
        class=" form-check-input"
        onchange="done(event)"
        >
        <label for="${checkId}" class=" form-check-label">${text}</label>
    </div>
    <button onclick="del(event)" class="btn btn-danger btn-sm ms-auto">Del</button>
`;

    return li;
}

const addList =() =>{
    lists.append(createLi(textInput.value));
    textInput.value = null;
}

const del = (event) => {
    // console.log(event.target.parentElement);
    event.target.parentElement.remove();
}

const done = (event) => {
    // console.log(event.target.nextElementSibling);
    event.target.nextElementSibling.classList.toggle("text-decoration-line-through");
}

const edit = (event) => {
    const oldText = event.target.querySelector(".form-check-label").innerText;
    const newText = window.prompt("Input New Text",oldText);
    event.target.querySelector(".form-check-label").innerText = newText;
}

createBtn.addEventListener("click",addList); 

textInput.addEventListener("keyup",(event) => {
    // console.dir(event.keyCode);
    if(event.keyCode === 13){
        addList();
    }
});