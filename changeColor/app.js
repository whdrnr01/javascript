const bg = document.querySelector('body');
const colorBtn = document.querySelector('#colorBtn');

colorBtn.addEventListener('click', changeColor);
// bg.style.backgroundColor = 'green';
const colors = ['black', 'white', 'green', '#45ee88', 'gray', 'red', 'yellow'];

function changeColor() {
    let random = Math.floor(Math.random() * colors.length);
    bg.style.backgroundColor = colors[random];
}