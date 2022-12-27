//========พื้นฐาน Oject =========
// KEY : VALUE

// const obj = new Object();
// obj.name = 'Clown'
// obj.color = 'Pink'

// console.log(obj);

// การสร้าง Oject ด้วยเครื่องหมาย { }

// const obj = {
//     name: 'Clown',
//     color: 'Pink',
//     age: 90
// }

// console.log(obj);

// Mutate
// obj['name'] = 'Doe'

// console.log(obj);

//======== Oject สามารถเก็บ value เป็นฟังก์ชันก็ได้

// const obj = {
//     name: 'Clown',
//     color: 'Pink',
//     age: 90,
//     hello: function(){
//         return `hello ${this.name}`;
//     }
// }

// console.log(obj);
// console.log(obj.hello());

//======== This

const obj = {
    name: 'Clown',
    color: 'Pink',
    age: 90,
    hello1: function(){
       console.log(this);
    },
    hello2: () => {
        console.log(this);
    },
}

obj.hello1();
obj.hello2();

