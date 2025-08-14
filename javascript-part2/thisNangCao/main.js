// this trong JS rất linh hoạt và có thể trỏ đến các đối tượng khác nhau tùy vào ngữ cảnh
// mà nó được sử dụng.

// Scope - Phạm vi
//https://javascript.fullstack.edu.vn/?id=fb5e6ad6-b49f-4669-9f64-b3a39037e49e
// Global Scope
// Function Scope
// "khi nhắc tới Scope chúng ta quan tâm gì ?"
// Ở đoạn mã này, mình có “nhìn thấy” và dùng được biến/hàm kia hay không?
// chúng ta coi "khả năng truy cập" tới biến , hàm , ... trong đoạn mã
// chúng ta sẽ coi ờ đây có truy đc biến đó không

//* bài học hôm nay là Context
// "Đối tượng tại nơi đoạn mã đang được thực thi" được xác định bởi từ khóa "this"
// tại nơi chúng ta thực thi, coi this đang trỏ đến đối tượng nào
// Context - Ngữ cảnh
// Global context
// Function context

//* Global Context :
// Trong ngữ cảnh toàn cục (ngoài bất kỳ hàm nào), this trỏ tới đối tượng toàn cục (global object).
// Trong trình duyệt web, đối tượng này là window; trong NodeJS, đối tượng này là global.
//ex :
console.log(this);

//* Function Context:
// Trong một hàm thông thường, giá trị của this phụ thuộc vào cách mà hàm được gọi.

//? Hàm được gọi thông thường:
// Khi một hàm được gọi như một hàm thông thường (không phải phương thức của đối tượng),
// this trỏ tới đối tượng toàn cục (hoặc undefined trong Strict Mode).
//ex:
function showThis() {
  console.log(this);
}

showThis(); //Window
// nếu dùng use strict thì nó sẽ trả về undefined nhé

//? Phương thức của đối tượng
//Khi một hàm được gọi như một phương thức của một đối tượng, this trỏ tới đối tượng đó.
const person = {
  name: "John",
  showThis: function () {
    console.log(this);
  },
};

person.showThis(); // trả object person

//? Constructor Functions (Hàm khởi tạo)
function Person(name) {
  this.name = name;
  this.showThis = function () {
    console.log(this);
  };
}

const person1 = new Person("John");

console.log(person1.name); //John
person1.showThis(); // trả về object person1

//? *Arrow Functions (Hàm mũi tên)
//Hàm mũi tên không có this của riêng nó; thay vào đó, nó kế thừa this từ phạm vi từ nơi nó được định nghĩa.
const person2 = {
  name: "John",
  showThis: function () {
    // nơi đc định nghĩa
    const innerFunction = () => {
      console.log(this);
    };
    innerFunction();
  },
};

person2.showThis(); // trả object person2

//*còn nếu

//this sẽ định nghĩa ở đây
const person3 = {
  name: "John",
  showThis: () => {
    console.log(this);
  },
};
person3.showThis(); //window (non- strict) or undefined (strict mode)

//* trường hợp
const person4 = {
  name: "John4",
  showThis: function () {
    const innerFunction = () => {
      console.log(this);
    };
    innerFunction();
  },
};

person4.showThis(); // in ra object person4
// trường này
const newPerson = person4.showThis;
newPerson(); // => nó trả ra window or undefined , vì showThis có this là đối tượng window (innerFunction cũng có this là window.)
