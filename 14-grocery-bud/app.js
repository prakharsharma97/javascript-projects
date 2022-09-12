// ****** SELECT ITEMS **********
const form = document.querySelector(".grocery-form");
const alert = document.querySelector(".alert");
const grocery = document.querySelector("grocery");
const submitBtn = document.querySelector(".submit-btn");
const container = document.querySelector(".grocery-contaniner");
const list = document.querySelector(".grocery-list");
const clearBtn = document.querySelector(".clear-btn");

// edit option
let editelement ;
let editFlag = false;
let editID = "";

// ****** EVENT LISTENERS **********
//submit form
form.addEventListener("submit",addItem);
//clear list
clearBtn.addEventListener("click",clearItems);
//display items onload
window.addEventListener("DOMContentLoaded",setupItems);

// ****** FUNCTIONS **********
//add items
function additem(e) {
    e.preventDefault();
    const value = grocery.value;
    const id = new Date().getTime.toString();

    if (value !==""&& !editFlag) {
        const element= document.createElement("article");
        let attr = document.createAttribute("data-id");
        attr.value = id;
        element.setAttributeNode(attr);
        element.classList.add(grocery-item);
        element.innerHTML`<p class = "title">${value}</p>
                <div class="btn-container">
                    //edit btn 
                    <button type="button" class="edit-btn">
                        <i class="fas fa-edit"></i>
                    </button>
                    <!-- delete btn -->
                    <button type="button" class="delete-btn">
                        <i class="fas fa-trash"></i>
                    </button>
                    </div>
                `;
        //add event listeners to both buttons;
        const deleteBtn = element.querySelector(".delete-btn");
        deleteBtn.addEventListener("click",deleteItem);
        const editBtn = element.querySelector(".edit-btn");
        editBtn.addEventListener("click",editItem);

        //append child
        list.appendChild(element);
        //display alert
        displayAlert("item added to the list","success");
        //show container
        contaniner.classList.add("success");
        //set local storage
        addToLocalStorage(id,value);
        //set back to default
        setBackToDefault();
    } else if(value !== "" && editflag){
        editElement.innerHTML = value;
        displayAlert("value changed", "success");

        //edit local storage
        editLocalStorage(editID, value); 
    }setBackToDefault();
    else{
        displayAlert("please enter value","danger");
    }
}
//display alert
function displayAlert(text,action) {
    alert.texcontent = text;
    alert.classList.add(`alert-${action}`);
    //remove alert
    setTimeout(function () {
        alert.textcontent = "";
        alert.classList.remove(`alert-${action}`);
    },1000)
}

// clear items
function clearItems() {
    const items =document.querySelectorAll("grocery-item");
    if ((item.length > 0)) {
        items.forEach(function(item){
            list.removalChild(item);
        });
    }
    container.classList.remove("show-container");
    displayAlert("empty list","danger")
    setBackToDefault();
    localStorage.removeItem("list");
}

// delete item

function deleteItem(e) {
    const element = e.currentTarget.parentElement.parentElement ;
    const id = element.dataset.id;

    list.removalChild(element);

    if(list.children.length === 0) {
        container.classList.remove("show-container");
    }
    displayAlert("item removed","denger")

    setBackToDefault();
    //removal from local storage
    removeFromLocalStorage(id);
}
//edit item
function editItem(e){
    const element = e.currentTarget.parentElement.parentElement;
    //set edit value
    editElement = e.currentTarget.parentElement.previousElementSibling;
    //set form value
    grocery.value = editElement.innerHTML ;
    editFlag = true;
    editID = element.dataset.id;
    //
    submitBtn.textContent = "edit";
}
// set back to defaults
function setBackToDefault(){
    grocery.value="";
    editFlag = false;
    editID = "";
    submitBtn.textContent = "submit";
}


// ****** LOCAL STORAGE **********

//add to local storage
function getToLocalStorage(id,value) {
    const grocery ={id,value};
    let items = getLocalStorage();
    items.push(grocery);
    localStorage.setItem("list",JSON.stringify(items));
}

function getLocalStorage() {
    return localStorage.getItem("list")
        ? JSON.parse(localStorage.getItem("list"))
        :[];
}

function removeFromLocalStorage(id) {
    let items = getLocalStorage();

    items = items.filter(function (item) {
        if(item.id !==id){
            return item;
        }
    });
    localStorage.setItem("list",JSON.stringify(items));
}
function editLocalStorage(id,value){
    let items = getLocalStorage();

    items = items.map(function (item){
        if (item.id === id) {
            item.value = value;
        }
        return items;
    });
    localStorage.setItem("list",JSON.stringify(items));
}

// ****** SETUP ITEMS **********
function setupItems(){
    let items = getLocalStorage();

    if (items.length > 0) {
        items.forEach(function (item) {
            createListItem(item.id, item.value);
        });
        container.classList.add("show-container");
    }
}

function createListItem(id, value){
    const element = document.createElement("article");
    let attr = document.createAttribute("data-id");
    attr.value = id;
    element.setAttributeNode(attr);
    element.classList.add("grocery-item");
    element.innerHTML = `<p class="title">${value}</p>
            <div class="btn-container">
            <!-- edit btn -->
            <button type="button" class="edit-btn">
                <i class="fas fa-edit"></i>
            </button>
            <!-- delete btn -->
            <button type="button" class="delete-btn">
                <i class="fas fa-trash"></i>
            </button>
            </div>
        `;
const deleteBtn = element.querySelector(".delete-btn");
deleteBtn.addEventListener("click",deleteItem);
const editBtn = element.querySelector(".edit-Btn");
editBtn.addEventListener("click",editItem);

list.appendChild(element);
}