const ListContainer = document.getElementById("list-container");
const inputBox = document.getElementById("input-box");

function addtask() {
    if (inputBox.value === "") {
        alert("nhập dữ liệu");
    } else {
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        ListContainer.appendChild(li);

        let SPAN = document.createElement("SPAN");
        SPAN.innerHTML = "\u00d7";
        li.appendChild(SPAN);
    }

    inputBox.value = "";
    saveTask();
}

ListContainer.addEventListener("click", function (e) {
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("checked");
        saveTask();
    } else if (e.target.tagName === "SPAN") {
        e.target.parentElement.remove();
        saveTask();
    }
});

function saveTask() {
    localStorage.setItem("data", ListContainer.innerHTML);
}

function showtask() {
    ListContainer.innerHTML = localStorage.getItem("data");
}

showtask();
