// trong JavaScript có 2 kiểu type dữ liệu cơ bản:
// - Kiểu dữ liệu nguyên thủy (Primitive data types)
// - Kiểu dữ liệu tham chiếu (Reference data types)

// primitive: String, Number, BigInt, Boolean , Symbol , null , undefined
// reference: Object, Array, Function

// primitive data types lưu ờ Stack
// Ưu điểm khi sử dụng: Hiệu suất cao hơn và so sánh giá trị dễ dàng.

// reference data types lưu ở Heap
// Ưu điểm khi sử dụng: Có thể lưu trữ nhiều giá trị hơn và có thể thay đổi kích thước.
// /Tại sao cần sử dụng: Cho phép lưu trữ và quản lý cấu trúc dữ liệu phức tạp, thao tác linh hoạt thông qua các phương thức và thuộc tính.

// ví dụ về reference:
let person = {
  name: "Nguyen Van A",
  age: 20,
  address: {
    city: "Hanoi",
    country: "Vietnam",
  },
};
// nếu bạn copy person qua 1 biến khác
let person2 = person;
// thì person2 sẽ là một tham chiếu đến cùng một đối tượng trong bộ nhớ.
// nếu bạn dùng asssign({},person) thì nó sẽ tạo ra một đối tượng mới trong bộ nhớ, nhưng thuộc tính address vẫn là tham chiếu đến cùng một đối tượng.
let person3 = Object.assign({}, person);

// còn nếu bạn dùng deep copy (structuredClone(...)) thì nó sẽ sao chép person nhưng thuộc tính address sẽ là một đối tượng mới trong bộ nhớ, không phải là tham chiếu đến cùng một đối tượng.
let person4 = structuredClone(person);

// qua phần so sánh :
// => nếu muốn so sánh 2 object dùng chúng ta có thể dùng JSON.stringify() chuyển nó về chuỗi để so sánh

// cách so sánh 2 object
// khi 2 biến khác tham chiếu thì nó sẽ không bằng nhau

// dùng toán tử === để so sánh
console.log(person === person2); // true
// vì nó dùng tham chiếu đến cùng một đối tượng trong bộ nhớ
console.log(person === person3); // false
// vì nó dùng Object.assign để tạo ra một đối tượng mới trong bộ nhớ

// dùng JSON.stringify để so sánh
console.log(JSON.stringify(person) === JSON.stringify(person2)); // true
// nhưng cách này không phải cách tốt vì nó có thể khác thứ tự các thuộc tính trong object

//dung lodash để so sánh
// truy cập lodash "lodash.com"
// <script src="https://cdn.jsdelivr.net/npm/lodash@4.17.21/lodash.min.js"></script>
// phương thức _isEqual(a, b) để so sánh 2 object
console.log(_.isEqual(person, person2)); // true
console.log(_.isEqual(person, person3)); // true
// => Lodash (_.isEqual) không so sánh theo địa chỉ trong stack hay heap — mà nó so sánh theo GIÁ TRỊ (deep comparison).
// nó so sánh sâu nhé

let obj1 = { id: 1, name: "John", address: { city: "Hanoi" } };
let obj2 = { id: 1, name: "John", address: { city: "SaiGon" } };
console.log(_.isEqual(obj1, obj2)); // false
