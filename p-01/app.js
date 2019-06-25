// LOTTO

const SETTING = {
    numBtn: document.querySelector('#numBtn'),
    lotto: document.querySelector('#lotto'),
    count: 6,
    maxNumber: 45
}
numBtn.addEventListener('click', getRandomNumber(SETTING.maxNumber))

function getRandomNumber(maxNum) {
    let numbers = [];

    for (let i = 0; i < SETTING.count; i++) {
        console.log(i);
    };

    if (numbers.length > 0) {
        lotto.innerHTML = numbers;
    }
}