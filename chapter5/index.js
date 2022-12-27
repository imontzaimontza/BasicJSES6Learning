//========พื้นฐานการสร้างฟังก์ชัน =========

// function hello(input) {
//     const output = input + ' nice to see you.'
//     return output
// }

// console.log(hello('Hi Jeff'));

//======== การใช้ Arrow ฟังก์ชันแทนใน ES6 =========

// const hello = (input) => output;
// const hello = input => output;

// const hello = input => input + ' nice to see you.';
// console.log(hello('Hi Jeff'));

// const goodbye = () => 'See you later';
// console.log(goodbye());

//======== การใช้ Anonumous vs. Named =========

// เราสามารถนำฟังก์ชันไปเก็บลงตัวแปรได้ เราเรียกว่า Anonymous function หรือ first class function  เช่น

// const someName = function () {
//     return 'Hello';
// }

// console.log(someName());

// เขียนด้วย Arror function
// const someName = () => 'Hello'
// console.log(someName());

// console.log(() => 'Hello');

//========  higher-order-function  =========
// คือการสร้างฟังก์ชันที่มีการ return parameter ออกมาเป็นฟังก์ชัน

// function cool(fun, fact) {
//     fun();
//     fact();
// } 

// cool(
//     () => console.log('Sweet!'),
//     () => console.log('Alert!')
// );

//======== Closures =========

function outer(){

    const fish = 'Carp';
    let count = 0;

    function inner(){
        count++;
        return `${count} ${fish}`
    }

    return inner

}

const fun = outer();

console.log(fun());
console.log(fun());
console.log(fun());
console.log(fun());
console.log(fun());