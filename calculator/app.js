const btns = document.querySelectorAll('.btn');
const screen = document.querySelector('.screen');
const equalBtn = document.querySelector('.btn-equal');
const clearBtn = document.querySelector('.btn-clear');

btns.forEach((btn) => {
    btn.addEventListener('click', () => {
        screen.textContent += btn.getAttribute('data-num');
    });
});

equalBtn.addEventListener('click', () => {
    if (screen.textContent === "") {
        alert('입력값이 없습니다.');
        return false;
    }
    screen.textContent = eval(screen.textContent);
});

clearBtn.addEventListener('click', () => {
    screen.textContent = "";
});