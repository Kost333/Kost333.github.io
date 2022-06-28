const textDuplicate = document.querySelector(".textDuplicate")
const text = document.querySelector(".text")
const names = document.querySelector(".names")
const textName = document.querySelector(".textName")

text.addEventListener("click", function () {
    text.style.backgroundColor = "black";
    text.style.color = "white";
})

text.addEventListener("keyup", function (evt) {
    textDuplicate.innerHTML = evt.target.value
})

let list = [
    "Albert",
    "Zara",
    "Davit",
    "Sona",
];

let searchText = "";

textName.addEventListener("keyup", (e) => {
    searchText = e.target.value;
    refresh()
})

let id;
function refresh() {
    if(id !== undefined) {
        clearTimeout(id);
    }
    id = setTimeout(() => {
        render();
    },1000);
}

function render() {
    names.innerHTML = "";

    list.filter((name) => {
        return name.indexOf(searchText) !== -1;
    }).map(name => {
        const foreachName = document.createElement("div")
        foreachName.innerHTML = name;
        return foreachName;
    }).forEach(el => {
        names.appendChild(el);
    })
}

render()