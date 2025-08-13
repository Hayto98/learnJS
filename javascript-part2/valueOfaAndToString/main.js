// valueOf() và toString()
// tìm hiểu
const demo = {
  name: "Hải",
};

console.log(demo + ""); //[object Object]

const demo1 = new Number(123);
console.log(demo1 + ""); //123

const demo2 = 999;
console.log(demo2 + ""); //999

// nếu demo + "" nó sẽ xem coi "demo" có phải primitive value không ? "nếu không primitive nó sẽ gọi valueOf() trước,
// nếu không trả về primitive mới gọi toString()": trả về [object Object]

// như demo1 nó sẽ autoboxing, nó sẽ gọi phương thức valueOf() lấy ra giá trị 123 và sao đó thực hiện biểu thức + "" => nó sẽ trả về chuổi "123"

// như demo2 nó là primitive value nên nó sẽ thực hiện biểu thức + "" => chuỗi 999

//* Ghi nhớ:

// valueOf() → ưu tiên để lấy giá trị primitive số/hay dữ liệu cốt lõi.

// toString() → để lấy biểu diễn dạng chuỗi.

// Trình tự mặc định khi ép kiểu: valueOf() → toString().

//? cái này ứng dụng như nào ?
//vd tình huống: tôi có cái web bán toàn cầu và muốn hiển thị mệnh giá ở quốc giá đó
// người dùng nhập 99 thì nó sẽ thì nó sẽ quy ra tiền vnd 99 * 24

function Money(value) {
  this.value = value;
  this.toVnd = function () {
    return `${this.value * 24000}đ`; // Trả về chuỗi số tiền VNĐ
  };
  this.valueOf = function () {
    return this.value; // Trả về primitive number
  };
}
const money = new Money(1);
console.log(money.toVnd());
console.log(money + 1);

//* thêm 1 cách kiểm tra dữ liệu
// 5 trường hợp
// console.log({}.toString() == "[object Object]");

//! dựa vào trên h tui làm hàm kiểm tra Object nhé (sai nhé)
// function chekObject(value) {
//   return value.toString() == "[object Object]";
// }

console.log(chekObject("[object Object]")); // true , vì 1 chuỗi gọi toString thì nó ra chính giá trị nguyên thủy
console.log(chekObject({})); // true
// console.log(chekObject(null)); // lỗi Uncaught TypeError
// console.log(chekObject(undefined)); // lỗi Uncaught TypeError
// console.log(chekObject(Object.create(null))); // lỗi Uncaught TypeError
//! => đây là cách làm sai

// cách kiểm tra : lấy toString của Object :
// phương thức :  Object.prototype.toString.call(giá trị) : chúng ta sẽ chuyền vào "giá trị" để giúp cho bên trong cái hàm dùng từ khóa this

console.log(Object.prototype.toString.call(1)); //[object Number]
console.log(Object.prototype.toString.call("abc")); //[object String]
console.log(Object.prototype.toString.call(null)); //[object Null]
console.log(Object.prototype.toString.call(undefined)); //[object Undefined]
console.log(Object.prototype.toString.call(Object.create(null))); //[object Object]
console.log(Object.prototype.toString.call([123, 123])); //[object Array]
console.log(Object.prototype.toString.call(() => {})); //[object Function]

//? giải thích :
// Object.prototype.toString là hàm gốc (native) của tất cả object trong JS.
// Khi bạn dùng .call(giá trị), bạn ép từ khóa this bên trong hàm đó trỏ tới giá trị cần kiểm tra.
// Hàm này sẽ trả về một chuỗi dạng "[object TênKiểu]" giúp phân biệt rõ các loại dữ liệu, kể cả những loại mà typeof không phân biệt được (như null, array, ...).
//* cách đúng cho bài trên :
function chekObject(value) {
  return Object.prototype.toString.call(value) == "[object Object]";
}
