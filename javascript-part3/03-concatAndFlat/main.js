//? concat() trong js là gì ?
// Phương thức concat() được sử dụng để nối hai hoặc nhiều mảng lại với nhau và trả về một mảng mới mà không làm thay đổi các mảng ban đầu.

//* cú pháp
// let newArray = array1.concat(array2, array3, ..., arrayX);

//* ví dụ
let fruits = ["apple", "banana"];
let vegetables = ["carrot", "pea"];

let combined = fruits.concat(vegetables); // ['apple', 'banana','carrot', 'pea'];
console.log(combined);

// Phương thức concat() hữu ích khi bạn cần tạo ra một mảng mới từ các mảng hiện có mà không muốn thay đổi mảng gốc.

//* Ưu điểm:
// Dễ dàng hợp nhất nhiều mảng.
// Bảo toàn mảng gốc không bị thay đổi.

let arr = [1, 23, 4, 5];
let arr2 = [0, 32, 12];
let arr3 = [22, 88, 99, 33, 123, 999];
let arrResult = arr.concat(arr2, arr3);
console.log(arrResult); // [1, 23, 4, 5, 0, 32, 12, 22, 88, 99, 33, 123, 999]

//? flat() là gì ?
// Phương thức flat() được sử dụng để làm phẳng mảng lồng nhau thành một mảng duy nhất.
// Bạn có thể chỉ định mức độ làm phẳng bằng cách cung cấp một tham số cho phương thức này.

//* ví dụ
let arrDemo = [1, 2, 3, [4, 5, [6, 7, 8]]];
console.log(arrDemo.flat(2)); //[1, 2, 3, 4, 5, 6, 7, 8]
console.log(arrDemo); // => lưu ý nó không sửa vào array gốc nha

// còn nếu bạn chưa biết mực độ chỉ định là bao nhiêu để array phẳng thì bạn có thể dùng Infinity
// cú pháp : arrDemo.flat(Infinity);

let demo = arrDemo.flat(Infinity);
console.log(demo); //(8) [1, 2, 3, 4, 5, 6, 7, 8]
// => Sử dụng Infinity để làm phẳng toàn bộ các mảng con.

// các hàm sửa vào mảng gốc nhé : push , pop , shift , unshift , reverse , splice, sort,..
