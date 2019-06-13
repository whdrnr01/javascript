const prevBtn = document.querySelector('#prevBtn');
const nextBtn = document.querySelector('#nextBtn');
const imgContainer = document.querySelector('.container');
// const imgCounter = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
let imgCount = 0;

let imgName = 'img/900-420-';
let imgExt = '.jpg';

nextBtn.addEventListener('click', getNextImg);
prevBtn.addEventListener('click', getPrevImg);

function getImgFileName(counter) {
    return "url('" + imgName + counter + imgExt + "')";
}

function getNextImg() {
    imgContainer.animate([{
        opacity: '0.1'
    }, {
        opacity: '1.0'
    }], {
        duration: 1000,
        fill: 'forwards'
    });

    if (imgCount === 9) imgCount = -1;
    imgCount++;

    imgContainer.style.backgroundImage = getImgFileName(imgCount);
}

function getPrevImg() {
    imgContainer.animate([{
        opacity: '0.1'
    }, {
        opacity: '1.0'
    }], {
        duration: 1000,
        fill: 'forwards'
    });

    if (imgCount === 0) imgCount = 10;
    imgCount--;

    imgContainer.style.backgroundImage = getImgFileName(imgCount);
}


// Random Image Rotate
/*
nextBtn.addEventListener('click', getRandomImg);
prevBtn.addEventListener('click', getRandomImg);

function getRandomImgFileName() {
    return "url('" + imgName + Math.floor(Math.random() * imgCounter.length) + imgExt + "')";
}

function getRandomImg() {
    let imgFileName = getRandomImgFileName();
    console.log(imgFileName);
    imgContainer.style.backgroundImage = imgFileName;
}
*/