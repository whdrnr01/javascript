// string
// const str = "hello world ^^ ~~";
// const matchstr = "~~~";

// console.log(str.startsWith(matchstr));
// console.log(str.endsWith(matchstr));
// console.log(str.includes("world"));


// for of
/*
let data = ["1", undefined, NaN, "", null];

for (let value of data) {
    console.log(value);
}

let str = "hello world!!!!";

for (let s of str) {
    console.log(s);
}
*/

// spred operator
/*
let data = ["apple", "mango", "banna"];
let newData = [...data];
console.log(newData);
*/
/*
function sum(a, b, c) {
    return a + b + c;
}

let pre = [100, 200, 300];
console.log(sum.apply("", pre));
console.log(sum(...pre));
*/

// from
/*
function addMark() {
    let newArray = Array.from(arguments)
    let newData = newArray.map((value) => {
        return value + "!"
    })

    console.log(newData)
}

addMark(1, 2, 3, 4, 5, 6, 7, 8, 9, 10)
*/

// Practice
function print() {
    const lis = document.querySelectorAll('li');
    let liArray = Array.from(lis);
    /*
    let liStrArray = [];
    liArray.forEach((li) => {
        liStrArray.push(li.textContent);
    });
    */

    /*
    let liStrArray = liArray.map((li) => {
        if (li.textContent.includes('e')) {
            return li.textContent;
        };
    });
    */


    let liStrArray = liArray.reduce((pre, value) => {
        if (value.textContent.includes('e')) {
            pre.push(value);
        }
        return pre;
    }, []);


    /*
    let liStrArray = liArray.filter((li) => {
        if (li.textContent.includes('e')) {
            return li.textContent; 
        }
    });
    */
    console.log(liStrArray);
}

print();

/* reduce를 이용해서 해결
let arr = ['foo', 'hello', 'diamond', 'A', 100];
// let arr2 = arr.map((str) => {
//     return str.length;
// });

let arr2 = arr.reduce((pre, value) => {
    pre.push(value.length);
    return pre
}, []);
console.log(arr2);
*/


// let arr = [4, 15, 377, 395, 400, 1024, 3000];
/*
let arr2 = arr.reduce((pre, value) => {
    if (value % 5 == 0) {
        pre.push(value);
    }
    return pre;
}, []);
*/
/*
let arr2 = arr.reduce((pre, value) => {
    if (typeof pre === 'undefined' && value % 5 == 0) {
        pre = value;
    }
    return pre;
}, undefined);
console.log(arr2);
*/