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

function addMark() {
    let newArray = Array.from(arguments)
    let newData = newArray.map((value) => {
        return value + "!"
    })

    console.log(newData)
}

addMark(1, 2, 3, 4, 5, 6, 7, 8, 9, 10)