const createBtn = document.querySelector("#createBtn");
const textInput = document.querySelector("#textInput");
const lists = document.querySelector("#lists");

const createLi =(text) => {
    const dynamicId = "flexCheck"+Date.now();
  const li = document.createElement("li");
  li.addEventListener("dblclick",edit);

  li.className = "list-group-item d-flex align-items-center";
  li.innerHTML = `
    <div class=" form-check">
        <input 
        id=${dynamicId}
        type="checkbox" 
        class=" form-check-input"
        onchange="done(event)"
        >
        <label for="${dynamicId}" class=" form-check-label">
        ${text}
        </label>
    </div>
    <button class="btn btn-danger btn-sm ms-auto" onclick="del(event)">Del</button>
  `;

  return li;
    
}


const addList =() =>{
    lists.append(createLi(textInput.value));
    textInput.value = null;
}

const del = (event) => {
    // console.log(event.target);
    if(confirm('Are you sure to delete ?')){
        event.target.parentElement.remove();

    }
}

const done = (event) => {
    // console.log(event.target.nextElementSibling);
    event.target.nextElementSibling.classList.toggle("text-decoration-line-through");
}

const edit = (event) => {
    const old =event.target.querySelector(".form-check-label");
    const newText = prompt("Input New Text",old.innerText);
    // console.log(newText);
    old.innerText = newText;
}

createBtn.addEventListener("click",addList);

textInput.addEventListener("keyup",(event) => {
    // console.log(event.keyCode);
    if(event.keyCode === 13){
        addList();
    }
});