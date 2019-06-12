const hexNumbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F'];
const bg = document.querySelector('body');
const colorBtn = document.querySelector('#colorBtn');
const hex = document.querySelector('.hex');

colorBtn.addEventListener('click', getHex);
// bg.style.backgroundColor = 'green';
/*
const colors = ['black', 'white', 'green', '#45ee88', 'gray', 'purple', 'yellow'];

function changeColor() {
    let random = Math.floor(Math.random() * colors.length);
    bg.style.backgroundColor = colors[random];
    document.querySelector('.hex').innerHTML = colors[random];
}
*/

function getHex() {
    let hexCol = '#';

    for (let i = 0; i < 6; i++) {
        let random = Math.floor(Math.random() * hexNumbers.length);
        hexCol += hexNumbers[random];
        // console.log(hexCol);
    }

    bg.style.backgroundColor = hexCol;
    hex.innerHTML = hexCol;
}