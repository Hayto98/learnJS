//Prototype
function Character(name) {
  this.name = name;
}

Character.prototype.sayHi = function () {
  console.log("hello");
};

console.log(Character.prototype); // prototype là 1 object

console.log(Character);

let player = new Character("Hai");
console.log(player);

//* kiến thức mới
// chúng ta có thể lấy prototype trong object nhá
//? cách lấy như sau :
console.log(player.__proto__); //{sayHi: ƒ}
console.log(player.__proto__ == Character.prototype); // true
// ngoài việc tự định nghĩa phương thức hay thuộc tính  thì bên trong nó , JS có tạo sẵn constructor hàm chiếu chính nó

console.log(Character.prototype.constructor == Character); // true , nó log ra hàm tạo chính nó
// nếu muốn coi ở dạng object thì
console.dir(Character.prototype.constructor);

//* việc JS làm như vầy có ý nghĩa
// từ 1 đối tượng đã tạo ra rồi, chúng ta có thể coi nó tạo ra từ hàm tạo nào
console.log(player.__proto__.constructor); //ƒ Character(name) {
//   this.name = name;
// }

//? ngoài ra chúng ta có thể kiểm tra nó có đc tạo từ object Charactor bằng cách khác
console.log(player instanceof Character); // true

//* chuỗi kế thừa

const person = {
  name: "Hải",
};

console.log(person.__proto__ === Object.prototype); // true
//? Lý thuyết chuỗi kế thừa (Prototype Chain)
// Mỗi đối tượng trong JavaScript có một liên kết đến một đối tượng khác gọi là prototype của nó.
// Đối tượng prototype đó lại có prototype của riêng nó, và cứ thế tiếp tục cho đến khi một đối tượng có prototype là `null`.
// `null`, theo định nghĩa, không có prototype và đóng vai trò là mắt xích cuối cùng trong chuỗi kế thừa này.
// Khi cố gắng truy cập một thuộc tính của một đối tượng, thuộc tính đó không chỉ được tìm kiếm trên đối tượng đó mà còn trên prototype của đối tượng, prototype của prototype, và cứ thế tiếp tục cho đến khi tìm thấy thuộc tính hoặc đến cuối chuỗi.

// Ví dụ:
// Chuỗi kế thừa của `person` là: person ---> Object.prototype ---> null
// Khi ta gọi một phương thức không có trong `person` như `person.toString()`,
// JavaScript sẽ tìm lên `person.__proto__` (tức là `Object.prototype`) và tìm thấy phương thức `toString` ở đó.

console.log(Object.prototype.__proto__); // null -> đây là điểm cuối cùng của chuỗi kế thừa

Object.prototype.sayHi = function () {
  console.log('Hello, my name is "Object"');
};

"ABC".sayHi();
// nó sẽ đi tìm như sau
// new String("ABC") => String.prototype => Object.prototype

// ngoài ra nó còn có tính ra đè
String.prototype.sayHi = function () {
  console.log("Hello, tôi là String");
};

"ABC".sayHi(); // lúc này cái này sẽ là "Hello, tôi là String", vì bị ghi đè ở trên

//* có 1 cái khá hay
// nếu bạn viết như này
Function.prototype.sayHello = function () {
  console.log("Đây là function");
};
// thì Object , Number , Boolean , String .sayHello đc không ?
Object.sayHello(); //-> đc nha (này gọi và static function)
