document.querySelector('#cal').addEventListener('click', calculator);



function calculator() {
    let value1 = parseInt(document.querySelector('#value1').value);
    let value2 = parseInt(document.querySelector('#value2').value);
    let op = document.querySelector('#operator').value;
    let cal = '';

    switch (op) {
        case 'add':
            cal = value1 + value2;
            break;

        case 'min':
            cal = value1 - value2;
            break;

        case 'div':
            cal = value1 / value2;
            break;

        case 'mul':
            cal = value1 * value2;
            break;

        default:
            return false;
            break;
    }

    document.querySelector('#result').textContent += cal;
}