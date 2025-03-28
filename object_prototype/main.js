/*
  Object prototype 

  1 Prototype là gì ?
  
  trong object luôn tồn tại attribute đặc biệt nó gọi là prototype 
  nó nằm trong _proto_ và nó có liên quan đến kế thừa 

  prototype giúp bạn thêm thuộc tính ở bên ngoài 
  nếu thêm thuộc tính và phương thức vào bằng prototype thì nó sẽ hiển thị
  ở trong _proto_
*/

var caiKhung = function (firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;
};
caiKhung.prototype.fullName = function () {
  return `${this.firstName} ${this.lastName}`;
};
caiKhung.prototype.giongNoi = "Mien Nam";

var h = new caiKhung("Thanh", "Hai");
var ch = new caiKhung("Le", "Nam");

console.log(h);
console.log(h.fullName());
console.log(ch);
console.log(ch.fullName());

console.log(h.giongNoi);

//////////////
// Object assign(A,B):
// nó sẽ copy các thuộc tính B và gắn thêm hoặc gắn đè lên A
// * sao chép thuộc tính
// * ghi đè
// * trả về chính đối tượng A
// * không sao chép sâu

var person1 = {
  name: "Thanh Hải",
  age: 20,
  color: "red",
};
var person2 = {
  name: "Minh Hiếu",
  address: "ap 5",
};

Object.assign(person1, person2);

console.log(person1);
console.log(person2);

//ví dụ cho không sao chép sâu

var obj1 = {
  name: "Kashi",
  address: {
    city: "Long An",
    street: "Rạch Kiến",
  },
  number: [1, 2, 3],
};

var copyObj2 = Object.assign({}, obj1);
(copyObj2.name = "hayto"), (copyObj2.address.street = "Tân An");
copyObj2.number[0] = 12;

console.log(obj1);
console.log(copyObj2);

// => copy by reference : array và object và function
// 1. Khởi tạo một hàm
function originalFunction() {
  console.log("Original function called");
  originalFunction.count = (originalFunction.count || 0) + 1;
}

// 2. Sao chép tham chiếu
const copiedFunction = originalFunction;

// 3. Gọi cả hai hàm
originalFunction(); // Output: "Original function called"
copiedFunction(); // Output: "Original function called"
console.log("originalFunction.count: ", originalFunction.count); // Output: 2
console.log("copiedFunction.count: ", copiedFunction.count); // Output: 2

// tóm lại hàm assign() sẽ không sao chép sâu, nếu nó sao chép
// function, array và object thì nó sẽ thay đổi đồng bộ nhau (gọi là copy by reference)
// còn các giá trị nguyên thị thì sẽ không thay đổi đồng bộ

const person = {
  firstName: "John",
  lastName: "Doe",
  age: 50,
  eyeColor: "blue",
};

let text = Object.entries(person);
console.log(text);

// object Date
var date = new Date();
var day = date.getDate();
var minutes = date.getMinutes();
var year = date.getFullYear();
var hours = date.getHours();
var month = date.getMonth() + 1;
console.log(`${day}/${month}/${year} vào giờ ${hours}:${minutes}`);

// Math object

/*
  Math.PI  trả về pi 
  Math.round() làm tròn 
  Math.abs() số tuyệt đối
  Math.ceil() làm tròn trên
  Math.floor() làm tròn dưới
  Math.random() 
  Math.min(A,B,C) tìm giá trị nhỏ nhất trong dãy số 
  Math.max(A,B,C) tìm giá trị lớn nhất trong dãy số 
*/

// console.log(Math.floor(Math.random() * 5));
// var random = Math.floor(Math.random() * 100);
// var bonus = ["10 coin", "20 coin", "30 coin", "40 coin", "50 coin"];
// console.log(bonus[random]);

// if (random < 50) {
//   console.log("...");
//   console.log(random);
// }
