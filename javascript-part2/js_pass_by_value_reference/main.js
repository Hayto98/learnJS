// Pass by Value
// pass by value là sao ?
// Khi bạn truyền một biến vào một hàm, JavaScript sẽ tạo ra một bản sao của giá trị đó và truyền nó vào hàm.
// Nếu bạn thay đổi giá trị của biến trong hàm, nó sẽ không ảnh hưởng đến giá trị gốc bên ngoài hàm.
let x = 10;

function changeValue(a) {
  a = 20; // Chỉ thay đổi giá trị của a, không ảnh hưởng đến x
}
changeValue(x);
console.log(x); // Kết quả: 10
// Pass by Reference
// pass by reference là sao ?
//  Pass by reference (truyền theo tham chiếu) là một khái niệm mô tả cách một biến được truyền vào hàm.
//  Khi một biến được truyền bằng cách pass by reference, thay vì truyền giá trị của biến đó, một tham chiếu (hoặc địa chỉ bộ nhớ) đến biến gốc được truyền vào hàm.
//  Điều này có nghĩa là bất kỳ thay đổi nào đối với tham số trong hàm sẽ ảnh hưởng trực tiếp đến biến gốc bên ngoài hàm ngay lập tức.

// nhưng nhiều người sẽ nói rằng JavaScript hỗ trợ pass by reference, nhưng thực chất là pass by value.
// vd dưới đây là thay đổi thuộc tính của đối tượng, nhưng không thay đổi tham chiếu của nó.
let obj = { value: 10 };
function changeObject(o) {
  o.value = 20; // Thay đổi thuộc tính của đối tượng, ảnh hưởng đến obj
}
changeObject(obj);
console.log(obj.value); // Kết quả: 20

// ví dụ vì sao pass by reference không có trong JavaScript

function changeValue(y) {
  // y = { name: "Hello" }; // Thay đổi tham chiếu của y, không ảnh hưởng đến person => pass by value
  y.name = "Haha"; // Thay đổi thuộc tính của đối tượng, ảnh hưởng đến person
}
let person = { name: "Hai" };

changeValue(person);

console.log(person);

///https://www.mathwarehouse.com/programming/images/pass-by-reference-vs-pass-by-value-animation.gif
// coi này sẽ hiểu rõ hơn về pass by value và pass by reference
