//======== ตัวอย่างการเช็คชนิดของมูลใน JavaScript

// console.log(typeof undefined);
// console.log(typeof 23);
// console.log(typeof "23");
// console.log(typeof false);
// console.log(typeof true);

//======== รู้จักกับชนิดข้อมูลแบบ null และ undefined
// console.log(null === undefined); // null และ undefined มีค่าไม่เหมือนกัน

//======== ค่าเริ่มต้นของ variable เป็น undefinde
// var x;
// console.log(x);

//======== ค่าเริ่มต้นของฟังก์ชันก็ return เป็น undefined เช่นกัน
// function a() {}

// console.log(a());

//======== ดังนั้นหากเราต้องการค่าตัวแปรเป็น null หรือ return ค่าออกจากฟังก์ชันเป็น null เราต้องกำหนดแบบนี้

// var x = null;
// console.log(x);

// function a() {
//     return null
// }

// console.log(a())

//======== ต่อไปเรามาดูชนิดข้อมูลแบบ Object กัน

// console.log(typeof []); // array
// console.log(typeof {}); // object
// console.log(typeof function(){});

//======== ซึ่งการทำงานกับ Ojbect เรามักจะมีการอัพเดทเปลี่ยนแปลงข้อมูลภายในตัวมัน เราเรียกว่าการ Mutate

// var x = {};  // define

// x['foo'] = 'bar' // Mutate

// console.log(x);

//======== โดยสรุปถ้าข้อมูลตัวนั้นไม่ใช่ Primative มันจะต้องถือเป็น Object เช่น Array , Object ,function, Class Instance เหล่านี้เป็นต้น

//======== ตัวอย่างชนิดข้อมูลที่เป็น Object
var foo = Boolean(false) // Boolean is function
console.log(typeof foo);

var bar = String('hello');
console.log(typeof bar);

console.log();
