//* cơ chế Autoboxing là gì
// lợi ích giúp chúng ta làm việc và hiểu về kiểu dữ liệu nguyên thủy hơn
// ví dụ
// nếu bạn có
let obj = {
  name: "John",
};
console.log(obj["name"]); // này đang truy cập vào thuộc tính (bình thường)

// còn nếu
let ch = "Hello world";
console.log(ch["length"]); // cũng đang truy cập nhưng tại sao lại có thuộc tính length
// => vì trong khi ta tạo như vầy thì nó sẽ tạo cho chúng ta
// let ch = new String("Hello world");
// trong đó có prototype về thuộc tính length đó , nhưng nhớ là nó tạo (new String("Hello world")) trong bộ nhớ và sẽ bị giải phóng bộ nhớ liền

//* một vài lưu ý
// Lợi ích của Autoboxing : Giúp các giá trị nguyên thủy dùng được method giống object, rất tiện
//? Điểm cần cẩn thận : Nếu bạn tự dùng new String() hoặc new Number() thì giá trị không còn là primitive nữa => dễ gây bug khi so sánh:

let a = new String("abc");
let b = "abc";

console.log(a === b); // ❌ false (object vs primitive)
console.log(a == b); // ✅ true (so sánh lỏng, ép kiểu)
