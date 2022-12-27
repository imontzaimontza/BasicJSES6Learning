//======== ใน JavaScript เรานิยมใช้ if...else statement กำหนดเงื่อนไขแบบพื้นฐานเช่น

// var truthy;

// if(truthy){
// do this
// }else if(truthy == null){
// do this
// }else{
// do this
// }

//======== ความเข้าใจเกี่ยวกับค่า true และ false
// true
// console.log(true);
// console.log(!! {});
// console.log(!! []);

// false
// console.log(!! '');
// console.log(! 'hi');
// console.log(!! 0);
// console.log(! -1);

//======== การใช้ Operator

// var x = !!!!!!!!!true;
// console.log(x);

// var a = true && false
// var a = true || false
// console.log(a);

// var x = "23" == 23;
// var x = "23" === 23;
// console.log(x);

//======== Ternary Operator
// ปกติเราเขียนเงื่อนไขกันแบบนี้
// var truthy = false;
// var x;
// if (truthy) {
//   x = 1;
// } else {
//   x = 2;
// }
// console.log(x);

//======== หากต้องการเขียนแบบ Ternary
// var truthy = false;
// var x = truthy ? 1 : 2;
// console.log(x);

//======== การใช้งาน Switch

// var expression = 'tiger';

// switch(expression){
//     case 'dog':
//         console.log('🐕 This is a dog');
//         break;
//     case 'cat':
//         console.log('🐈 This is a cat');
//         break;
//     default:
//         console.log('Undefined animal type');
// }

//======== การใช้งาน try/ Catch

try {
    throw new Error();
    console.log('works 😃');
}catch(error){
    console.log('broke 👻');
}finally{
    console.log('always works 😃');
}