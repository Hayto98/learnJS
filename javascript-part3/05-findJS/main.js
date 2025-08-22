// find()
// Phương thức find() được sử dụng để tìm phần tử đầu tiên trong một mảng thỏa mãn một hàm kiểm tra nhất định.
// Nếu không có phần tử nào thỏa mãn, phương thức này trả về undefined.

// ví dụ:
let ch = [12, 21, 9, 12, 99, 102, 12];
let result = ch.find(function (item) {
  return 100 < item;
});
console.log(result); //102
// cách viết ngắn hơn
let result2 = ch.find((item) => item > 100);
console.log(result2); //102

// với findLast() :
// Phương thức findLast() tìm phần tử đầu tiên tính từ cuối mảng thỏa mãn hàm kiểm tra đã cho.
// Nếu không tìm thấy phần tử nào, nó trả về undefined.

// ví dụ: tìm phần tử nhỏ hơn 10
let result3 = ch.findLast((item) => item < 10);
console.log(result3); //9

// còn khi nào dùng findIndex():
// Phương thức findIndex() trả về chỉ mục của phần tử đầu tiên trong mảng thỏa mãn hàm kiểm tra cung cấp.
// Nếu không có phần tử nào thỏa mãn, nó trả về -1.
//* Cú pháp:
// const foundIndex = array.findIndex(callbackFunction, thisValue);
// callbackFunction: Hàm kiểm tra được gọi cho mỗi phần tử trong mảng.
/* element: Phần tử hiện tại đang được xử lý. */
/* index (tùy chọn): Chỉ mục của phần tử hiện tại.*/
/* array (tùy chọn): Mảng đang được sử dụng. */
// thisValue (tùy chọn): Giá trị để sử dụng làm this khi thực hiện callbackFunction
const numbers = [4, 10, 18, 5, 24, 78];
const result4 = numbers.findIndex((num) => num > 10); //2

console.log(result4);

// với findLastIndex():
// findLastIndex() là phương thức tìm chỉ mục của phần tử đầu tiên tính từ cuối mảng thỏa mãn một hàm kiểm tra.
// Giống như findIndex, nếu không tìm thấy phần tử nào, phương thức này trả về -1.
//* Cú pháp
// const foundLastIndex = array.findLastIndex(callbackFunction, thisValue);
const reviews = [{ stars: 5 }, { stars: 2 }, { stars: 4 }, { stars: 1 }];
const result5 = reviews.findLastIndex((review) => review.stars < 3);

console.log(result5); //3

//* Sai lầm thường gặp: Quên return trong hàm callback dẫn đến kết quả là undefined hoặc -1. Luôn đảm bảo hàm callback trả về giá trị truthy khi điều kiện đúng.
