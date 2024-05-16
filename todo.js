var input = document.querySelector("input"),
    list = document.querySelector("ul"),
    addButton = document.querySelector(".addButton");

    input.addEventListener("keypress", function(e) {
        if(e.key==='Enter') {
           createLi();
        }
    })

addButton.addEventListener("click", function() {
    createLi();
})

function createLi(){
    var item = document.createElement("li");
    addCheckbox(item);

    var text = document.createElement("textNode");
    text.innerText = input.value;
    item.appendChild(text);


    addRemoveButton(item);
    

    list.appendChild(item);
    input.value = "";
}

function addRemoveButton(_item) {
    var removeButton = document.createElement("button");
    removeButton.className = "removeButton";
    _item.appendChild(removeButton);

    removeButton.addEventListener("click", function() {
        var parentLi = this.parentElement;
        parentLi.remove();
    })
}

function addCheckbox(_item) {
    var checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    _item.appendChild(checkbox);

    checkbox.addEventListener("change", function(ev) {
        if(checkbox.checked) {
            _item.className = "done";
        }
        else{
            _item.className = "";
        }
    })
}
