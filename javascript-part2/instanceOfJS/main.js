// khi vào bài này cần coi lại bài prototype Chain nha

//? instanceof

// instanceof sẽ kiểm tra xem Constructor.prototype có nằm ở bất kỳ đâu trong chuỗi prototype chain
// của object không (so sánh theo reference). Nếu có, trả true.

const colors = ["red"];
console.log(colors instanceof Array);

//* ví dụ 1
const person1 = Object.create(null);
console.log(person1 instanceof Object); //=> false, vì Object.create(null) tạo ra object không có prototype, tức là __proto__ của nó là null
// → prototype chain không chứa Object.prototype → instanceof Object là false.
//* ví dụ 2
console.log(Number instanceof Object); // => true vì trong Number có prototype của Object
//* ví dụ 3
console.log(123 instanceof Number); // => false vì kiểu dữ liệu primitive không cho so sánh đc với reference, và instanceof không trigger auto-boxing cho primitive
//* nhưng nếu ghi vầy thì sao
console.log(new Number(123) instanceof Number); // true , vì nó truy xuất có prototype của Number
//* ví dụ 4
function Cat(name) {
  this.name = name;
}
function Dog(name) {
  this.name = name;
}
console.log(Cat instanceof Dog); // false vì không cùng prototype chain ( không cùng nguyết thống )

console.log(Cat instanceof Object); //true vì đang so sánh với ông tổ mà

//* instanceof yêu cầu bên trái là object, bên phải là function constructor
