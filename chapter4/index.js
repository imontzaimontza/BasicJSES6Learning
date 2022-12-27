//======== การสร้งตัวแปรใน javascript

// x = 'smile';

// var x = 'smile';

// let x = 'smile';

// const x = 'smile';

//======== ตัวแปรแบบ var สร้างขึ้นมาแล้วสามารถกำหนดค่าใหม่เข้าไปได้เรื่อยๆ

// var x;

// x = 'something';
// x = 'someghing else'

// console.log(x);

//======== อีกเรื่องคือ var ไม่สนใจ scope มันถูกมองเป็น global

// var a = 10;

// {
//     var a = 20;
// }

// console.log(a);

// var g = 'global';

// function app(){
//     console.log(g);
// }


// app();

//======== การใช้งาน let

// if(true){
    // block
    // let x = 23;
    // var x = 23;
// }

// console.log(x);

//======== การใช้งาน const
// if(true) {
    // block
//     const x  = 23;

    // ไม่สามารถ Assign ค่าใหม่ได้
//     x = 25

// }

// console.log(x);