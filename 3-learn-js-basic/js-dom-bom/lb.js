const createBtn = document.querySelector("#createBtn");
const textInput = document.querySelector("#textInput");
const lists = document.querySelector("#lists");

const total = document.querySelector("#total");
const doneTotal = document.querySelector("#doneTotal");

const data = ["sar pe p lar","morning","good night","read book","learn JavaScript"];

const counter = () => {
  const totalCount =lists.children.length
  const doneTotalCount = [...lists.children].filter(
    (el) => el.querySelector(".form-check-input").checked === true
    ).length;
   
  total.innerText = totalCount;
  doneTotal.innerText = doneTotalCount;
}

const createLi = (text) => {
  const dynamicId = "flexCheck" + Math.random();
  const li = document.createElement("li");
  // li.addEventListener("dblclick", edit);
  // li.ondblclick = edit;

  li.className = "list-group-item d-flex align-items-center";
  li.innerHTML = `
    <div class=" form-check">
        <input 
        id=${dynamicId}
        type="checkbox" 
        class="form-check-input"
        onchange="done(event)"
        >
        <label for="${dynamicId}" class=" form-check-label">
        ${text}
        </label>
    </div>

    <div class="btn-group ms-auto">
      <button class="btn btn-outline-dark btn-sm ms-auto" onclick="edit(event)">
          <i class=" bi bi-pencil pe-none"></i>
      </button>
      <button class="btn btn-outline-dark btn-sm ms-auto" onclick="del(event)">
          <i class=" bi bi-trash pe-none"></i>
      </button>
    </div>
  `;

  return li;
};

const addList = () => {
  if (textInput.value.trim()) {
    lists.append(createLi(textInput.value));
    textInput.value = null;
    counter();
  } else {
    alert("Input Text is empty");
  }
};

const del = (event) => {
  // console.log(event.target);
  if (confirm("Are you sure to delete ?")) {
    // console.log(event.target);
    event.target.closest(".list-group-item").remove();
    // event.target.parentElement.parentElement.parentElement.remove();

    counter();
  }
};

const done = (event) => {
  // console.log(event.target.nextElementSibling);
  event.target.nextElementSibling.classList.toggle(
    "text-decoration-line-through"
  );
  counter();
};

const edit = (event) => {
  // console.log(event.target);
  const old = event.target.closest(".list-group-item").querySelector(".form-check-label");
  const newText = prompt("Input New Text", old.innerText);
  // console.log(newText);
  if(newText && newText.trim()){
    old.innerText = newText;

  }
};


data.forEach((d) => lists.append(createLi(d)));

createBtn.addEventListener("click", addList);

textInput.addEventListener("keyup", (event) => {
  // console.log(event.keyCode);
  if (event.keyCode === 13) {
    addList();
  }
});

window.addEventListener("load",counter);