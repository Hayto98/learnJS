//primitive type và reference type

// primitive là dữ liệu nguyên thủy, nó đc lưu vào bộ nhớ stack
// các kiểu dữ liệu nguyên thủy trong Javascript bao gồm: string, number, bigint, boolean, symbol, null, undefined
// các giá trị này được lưu trực tiếp tại vị trí bộ nhớ mà biến chỉ đến và là bất biến (immutable)

let userName = "Hải";
let userAge = 21;
// vùng nhớ stack  để lưu giá trị Hải và 21
userAge = 30;
// vùng nhớ stack sẽ sửa userAge thành 30
let userAgeCopy = userAge;
userAgeCopy = 35;
// nó sẽ không ảnh hướng tới biến userAge, nó chỉ sửa userAgeCopy thôi

// hiệu suất cao hơn: vì giá trị được lưu trực tiếp trong vị trí bộ nhớ của biến, việc truy cập và xử lý dữ liệu nhanh chóng
// so sánh già trị dễ dàng: khi so sánh 2 giá trị nguyên thủy, Javascript sẽ so sánh giá trị thực tế của chúng, đảm bảo tính chính xác
let string1 = "hello world";
let string2 = "hello world";
console.log(string1 === string2); // true

//primitive type là bất biến
// trong JS các giá trị nguyên thủy là bất biến (immutable). Điều này có nghĩa là một khi một giá trị nguyên thủy được tạo, giá trị đó không thể thay đổi
let str = "hello";
str[0] = "ABC";
console.log(str);
// sự bất biến giúp chúng ta đảo bảo tính toán vẹn của dữ liệu và giúp chúng ta dễ dàng kiểm soát các thay đổi dữ liệu trong chương trình

// reference là kiểu dữ liệu tham chiếu, bao gồm : object , array, function và các đối tượng khác.
//khác với kiểu dữ liệu nguyên thủy, kiểu tham chiếu lưu trữ địa chỉ(tham chiếu) của giá trị trong bộ nhớ, thay vì giá trị thực tế
let person = {
  name: "John",
};
// bộ nhớ stack sẽ lưu địa chỉ của person (#0x001) và trỏ đến heap có giá trị đc lưu là {name: "John"}
let personCopy = person;
// personCopy và person có cùng địa chỉ và trỏ vào 1 vùng nhớ heap
personCopy.name = "Hải";
console.log(person); // bị sửa
console.log(personCopy); // bị sửa
/// đó là lý do chúng ta dùng Object.assign() để copy thuộc tính sang một object mới
let personCopy2 = Object.assign({}, person);
// lúc này personCopy2 sẽ có vùng nhớ stack và heap mới, person sẽ không ảnh hưởng tới

// lưu trữ và quản lý cấu trúc dữ liệu phức tạp: cho phép tạo ra các cấu trúc dữ liệu như đối tượng và mảng để lưu trữ và quản lý thông tin một cách có tổ chức
// thao tác linh hoạt: cung cấp khả năng thao tác dữ liệu thông qua các phương thức và thuộc tính, hỗ trợ lập trình hướng đối tượng

// Object.assign({}, obj) sao chép nông object. JSON.stringify() không phải cách đúng vì trả về chuỗi.
// ví dụ:
const student = {
  name: "Kaito",
  ID: "SE180001",
  fullInfo: {
    address: "Sài Gòn",
  },
};
// nếu dùng Object.assign() : thì nó chỉ lưu
// Stack sẽ lưu địa chỉ student
// Heap sẽ lưu value student
// nhưng
// trong student có object khác, nên Heap sẽ lưu value của fullInfo

let studentCopy = Object.assign({}, student);
console.log(student === studentCopy); // false vì có object bên trong đc lưu khác nhau
console.log(student.fullInfo === studentCopy.fullInfo); // true, vì cả 2 đang trỏ vào 1 địa chỉ fullInfo

// nếu dùng JSON.stringify() thì chuyển đổi object thành chuỗi rồi so sánh các chuỗi
console.log(typeof JSON.stringify(student)); //string
console.log(JSON.stringify(student) === JSON.stringify(studentCopy)); // true, vì so sánh chuỗi, không phải object thực

/// nếu muốn sao chép 1 cách chuyên sâu thì dùng structuredClone (còn gọi là so sánh deep clone)
let studentCopy2 = structuredClone(student); // thì nó sẽ tách thành 2 object (object con và object cha) hoàn toàn mới
console.log(student.fullInfo == studentCopy2.fullInfo); // false
