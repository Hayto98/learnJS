var ch = "Hoc JS tai F8!";

// 1 length
console.log(ch.length);
// 2 find index
console.log(ch.indexOf("JS")); //cách 1
console.log(ch.search("JS")); //cách 2

// 3 cut string
console.log(ch.slice(4, 6)); //JS

console.log(ch.slice(4)); // JS tai F8
console.log(ch.slice(-3, -1)); // start và end
// start là nhập số bắt đầu bao gổm ký tự tại chỉ số này

// end là nhập số kết thúc (không bao gồm số này)
// vd nhập (0,5) là start 0 đến 4 thôi

// 4 Replace : ghi đè
console.log(ch.replace("JS", "JavaScript"));
// ví dụ nếu ta có cái chuỗi cần thay đổi nhiều thì sao
var th = "học js nhưng js ở F8";
// lúc này chúng ta bt chuỗi chính quy
// cách dùng /.../g
//nó sẽ giúp bạn thay đổi hết
console.log(th.replace(/js/g, "javascript")); //học javascript nhưng javascript ở F8

// 5 Convert to upper case
console.log(ch.toUpperCase());
// 6 Convert to lower case
console.log(ch.toLowerCase());

// 7 Trim: xóa các khoảng cách bị thừa ở 2 bên
var h = "   ahihi   ";
console.log(h.trim());
//để kiểm tra độ dài coi có xóa không
console.log(h.trim().length);
console.log(h.length);
// 8 Split : cắt cái chuỗi thành array
var a = "Java, C, C++, JS";
console.log(a.split(", "));
// 9 get a character by index
const tc = "Thanh Hai";
console.log(tc.charAt(0));
console.log(tc[2]);

//number.toFixed(digits)
// hàm toFixed() giúp chúng ta lấy bao nhiêu chữ số sao dấu , (số thập phân )
// ví dụ
let num = 123.456;
console.log(num.toFixed(2)); // nó dẽ làm tròn 123.46 

// hàm toString(); 
// nó có thể đổi qua hệ nhị phân hoặc hệ thập lục phân 
console.log(num.toString(2)); //hệ nhị 

console.log(num.toString(16)); //hệ thập lục phân 
