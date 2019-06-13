const addBtn = document.querySelector('#addBtn');
const minBtn = document.querySelector('#minBtn');
const result = document.querySelector('#result');
if (result.textContent === "0") {
    result.style.color = "black";
}

let count = 0;

addBtn.addEventListener('click', addCount);
minBtn.addEventListener('click', minCount);

function addCount() {
    // let count = (Number(result.textContent) === "") ? 0 : Number(result.textContent);
    // count = count + 1;
    // // console.log(count);
    count++;
    if (count > 0) {
        result.style.color = "green";
    } else if (count === 0) {
        result.style.color = "black";
    }
    result.innerHTML = count;
}

function minCount() {
    // let count = (Number(result.textContent) === "") ? 0 : Number(result.textContent);
    // count = count - 1;
    count--;
    if (count < 0) {
        result.style.color = "red";
    } else if (count === 0) {
        result.style.color = "black";
    }
    result.innerHTML = count;
}