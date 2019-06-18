//  let 변수는 블럭 단위의 scope 에서만 접근이 가능하다. 

// var varname = "home";

// function home() {
//     var myhome = "myhome";

//     for (let i = 0; i < 100; i++) {

//     }

//     if (true) {
//         let myif = "myif";
//     }
//     console.log(myif);
// }

// home();

// lesson 2
const lis = document.querySelectorAll('li');

lis.forEach((li, key) => {
    li.addEventListener('click', () => {
        console.log(key + "번째 리스트입니다.");
    });
});