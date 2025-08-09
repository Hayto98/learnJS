// Built-in Javascript Constructor : hàm tạo dựng sẵn
// String , Number , Boolean , Array , Object , Function , v.v (các hàm hay dùng)

//? String(x) , Number(x) , Boolean(x) là các hàm ép kiểu
//? còn Array, Object làm việc với array , object
//    - Array.isArray(x), x instanceof Array : kiểm tra Array
//    - Object.assign(x,y)
// const x = { a: 1 };
// const y = { b: 2, c: 3 };

//* Object.assign(x, y) : không sao chép sâu (shallow copy), nghĩa là nếu một thuộc tính là một object, nó sẽ sao chép tham chiếu, không phải giá trị.

// console.log(x); // { a: 1, b: 2, c: 3 }
// console.log(y); // { b: 2, c: 3 }

//*    - Object.keys() : là một phương thức trong JavaScript dùng để lấy ra danh sách các key (tên thuộc tính) của một đối tượng dưới dạng mảng.
// const person = {
//   name: "Nghĩa",
//   age: 22,
//   city: "Hanoi"
// };

// const keys = Object.keys(person);
// console.log(keys); // ["name", "age", "city"]

//? Function: tạo hàm động (tạo hàm từ chuỗi )

//! null, undefined : không có hàm tương ứng

//! Bigin, Symbol: có hàm, không phải Constructor
// new Symbol(x) : là sai
// Syboml(x) : là đúng

//* Hàm tạo trả về đối tượng khi sử dụng từ khóa new
//* Khi sử dụng từ khóa new với các hàm tạo như String, Number, Boolean, Array, Object, và Function các hàm tạo này sẽ trả về một đối tượng.

let strObj = new String("hello");
console.log(typeof strObj); // object

let numObj = new Number(123);
console.log(typeof numObj); // object

let boolObj = new Boolean(true);
console.log(typeof boolObj); // object

let arrObj = new Array(1, 2, 3);
console.log(typeof arrObj); // object
//* lưu ý : nếu
let arrObj2 = new Array(100); //(100) [empty × 100] nó chỉ tăng cái length thôi
let arrObj3 = new Array("100"); // ['100']

let obj = new Object();
console.log(typeof obj); // object

// Function
// new Function() tạo một đối tượng Function mới, cho phép bạn định nghĩa hàm động.
let funcObj = new Function("a", "b", "return a + b");
console.log(typeof funcObj); // function

//* Sử dụng từ khóa new với các kiểu dữ liệu này tạo ra các đối tượng wrapper tương ứng, cho phép bạn truy cập vào các phương thức và thuộc tính của đối tượng.
//*  Tuy nhiên, trong nhiều trường hợp, việc sử dụng kiểu dữ liệu primitive (ví dụ: chuỗi literal, số, và giá trị boolean) là đủ và được ưu tiên vì tính đơn giản và hiệu suất tốt hơn.
// ví dụ
let str1 = new String("hello world");
console.log(str1);

// String {'hello'}0: "h"1: "e"2: "l"3: "l"4: "o"length: 5[[Prototype]]: String[[PrimitiveValue]]: "hello"
//review phân tích
//* String{'hello'} : cái này bạn thấy object đang bao bộc dữ liệu 'hello' : cái này gọi là wrapper object hay còn đc gọi là Boxing

// có 5 giá trị có wrapper object String , Object , Number , Bigin , Symbol

// trong đó có 3 cái dùng new trực tiếp String , Object , Number
// Bigin , Symbol thì phải dùng thông qua Object ()

//?  unbox : lấy giá trị bên trong

console.log(str1.valueOf());
