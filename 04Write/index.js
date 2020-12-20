
// let i;
// for (i = 0; i < 3; i++) {
//     const log = () => {
//         console.log(i);  }
//     setTimeout(log, 100);
// }// 3,3,3
//

// for (let i = 0; i < 3; i++) {
//     const log = () => {
//         console.log(i);
//     }
//     setTimeout(log, 100);
// }// 0,1,2
//

for (var i = 0; i < 3; i++) {
    (function (j){
        const log = () => {
            console.log(j);
        }
        setTimeout(log, 100);
    })(i)
}// 0,1,2



// let a = 'hello';
// let b = a;
// b = 'world';
// console.log(a);

let a = 3;
let b = new Number(3);
let c = 3;
console.log(a == b);
console.log(a === b);
console.log(b === c);
console.log(a === c);





