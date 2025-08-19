// nay chúng ra sẽ học slice()

// vd có cái mảng
let arr = [12, 3, 1, 9, 43, 22];
// dùng slice() để cắt vị trí nhé nó sẽ tạo ra 1 biến mới
let arr2 = arr.slice(1, 2); // 3
let arr3 = arr.slice(); // bạn đang copy arr
let arr4 = arr.slice(2); // từ index 2 đến hết
let arr5 = arr.slice(-1); // từ dưới mảng lên
console.log(arr2);
console.log(arr);
console.log(arr3);
console.log(arr4);
console.log(arr5);
arr.splice(-2, 1, 21); // splice nó sẽ làm thay đổi biến gốc
// cú pháp splice(vị trí, số lượng xóa item, thêm item )
console.log(arr); // [12, 3, 1, 9, 21, 22] // vị trí -2 xóa 1 phần thử về thêm '21'
arr.splice(0, 0, 1, 2, 3, 4);
console.log(arr); //[1, 2, 3, 4, 12, 3, 1, 9, 21, 22]
//  Sử dụng shift() và pop() chỉ hiệu quả trong tình huống cần loại bỏ một phần tử ở đầu hoặc cuối mảng.
//  Trong tình huống cần loại bỏ một hoặc nhiều phần tử liên tiếp nhau ở các vị trí khác bạn sẽ cần sử dụng tới splice().

//? Các sai lầm thường gặp
//* Không hiểu về chỉ số âm
// Một số người mới sử dụng có thể nhầm lẫn về việc sử dụng chỉ số âm, dẫn đến việc không trích xuất hoặc xóa đúng phần tử mong muốn.
// Cách giải quyết tốt:
// => Luôn nhớ rằng chỉ số âm được tính từ cuối mảng. -1 là phần tử cuối cùng.

// “Tưởng” slice() thay đổi mảng gốc
// slice() không thay đổi mảng gốc mà trả về một bản sao hoặc phần của mảng gốc. Việc không nhận thức rõ về điều này có thể gây nhầm lẫn.
// Cách giải quyết tốt:
// =>Luôn gán kết quả của slice() vào một biến mới để sử dụng.

// Sử dụng “delete” để xóa phần tử trong mảng
// Khi sử dụng delete array[index] để xóa một phần tử khỏi mảng, bạn sẽ gặp một số vấn đề. Cách tiếp cận này chỉ xóa giá trị tại vị trí chỉ định và để lại một “lỗ trống” (empty) trong mảng,
// nghĩa là vị trí đó không còn giữ giá trị nào nữa nhưng mảng vẫn giữ nguyên kích thước ban đầu.
// Điều này dẫn đến việc khi truy cập vị trí đó sẽ có giá trị là undefined.
let fruits = ["Apple", "Banana", "Mango"];

delete fruits[1];

console.log(fruits); //["Apple", empty,"Mango"]
console.log(fruits.length); //3

// Vòng lặp vẫn chạy 3 lần,
// giá trị của lần lặp "empty" sẽ là undefined
for (let fruit of fruits) {
  console.log(fruit);
}
//! Out put :
// Apple
// undefined
// Mango

//? Trong ví dụ trên, sau khi xóa, fruits[1] trả về undefined, nhưng kích thước của mảng (fruits.length) vẫn không thay đổi.
//* Cách giải quyết là sử dụng splice():
// Phương thức splice() giải quyết vấn đề này bằng cách cho phép bạn loại bỏ phần tử khỏi mảng
// mà không để lại “lỗ trống”. Mảng sẽ được tự động “dồn lại”, đảm bảo rằng không có giá trị undefined nào giữa các phần tử,
// và length của mảng sẽ được cập nhật lại đúng với số lượng phần tử hiện tại.

//? Ví dụ sử dụng splice() để loại bỏ một phần tử:
let fruits2 = ["Apple", "Banana", "Mango"];

fruits2.splice(1, 1);

console.log(fruits2); // ["Apple", "Mango"]
console.log(fruits2.length); //2

//* Tóm tắt
// Phương thức slice(): Tạo bản sao hoặc trích xuất một phần của mảng mà không làm thay đổi mảng gốc, trả về một mảng mới. Có thể sử dụng chỉ số âm để trích xuất từ cuối mảng.
// Phương thức splice(): Thêm hoặc loại bỏ các phần tử của mảng tại bất kỳ vị trí nào, sửa đổi mảng gốc. Cho phép thêm, loại bỏ hoặc thay thế phần tử.
// Sai lầm thường gặp:
// Sử dụng chỉ số âm sai cách. Hãy luôn nhớ -1 là ứng với phần tử cuối cùng.
// Nhầm tưởng slice() thay đổi mảng gốc. Hãy luôn nhận giá trị mới được trả về từ slice().
// Sử dụng delete để xóa phần tử trong mảng sẽ tạo ra “lỗ trống”. Hãy dùng splice() để loại bỏ phần tử mà không để lại “lỗ trống”.
