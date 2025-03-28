//Cách kiểm tra kiểu dữ liệu

//String : kiểu dữ liệu String biểu diễn chuỗi ký tự
let greeting = "hello world";
console.log(typeof greeting === "string");

//Number: kiểu number biểu diễn số
let value = 30;
let number = NaN;
console.log(typeof value === "number" && !isNaN(value)); //true
console.log(typeof value === "number" && !isNaN(number)); //false

//NaN được sử dụng để biểu thị kết quả của một phép toán số học không hợp lệ, và typeof NaN cũng trả về "number", 
// điều này có thể gây nhầm lẫn khi cần xác định một biến có phải là số hợp lệ hay không.
//// Do đó, cần kiểm tra thêm điều kiện để loại trừ NaN.

//Trong JS, number có thể biểu diễn số nguyên và số thực 
// Tuy nhiên, number nó có giới hạn   ±(2^53 - 1)  do sử dụng định dạng số IEEE754
// điều này BigInt trở nên quan trọng trong trường hợp xử lý số lớn vượt quá giới hạn của Numbe r

//BigInt : bigint cho số nguyên lớn (không thể biểu diễn số thực)
let largeNumber = 9007199254740991n; 
console.log(typeof largeNumber === 'bigint'); //true
// đây là kiểu dữ liệu mới được giới thiệu để xử lý các số nguyên lớn hơn 
//giới hạn của Number 
//9007199254740992 có thể được biểu diễn chính xác với BigInt("9007199254740992") hoặc 9007199254740992n.

//Boolean : boolean có giá trị true hoặc false
let isCheack = true;
console.log(typeof isCheack === 'boolean'); //true
//typeof isStudent trả về "boolean" và so sánh với "boolean" cho ra true.

//Null: biểu diễn giá trị "không có gì"
let emptyValue = null; 
console.log(emptyValue === null);
// trong JS, khi sử dụng typeof với một biến có giá trị null, nó sẽ trả về "object"
// chứ không phải "null". Để xác định một giá trị là null, chúng ta phải sử dụng so sánh trực tiếp 
// emptyValue === null

//Undefined: biểu thị cho biến chưa được gán giá trị 
let notAssigned; 
console.log(typeof notAssigned === 'undefined'); //true 


//Object : chứa cặp khóa và giá trị 
let person = {
  name : 'Hai', 
  age : 18
}
console.log(typeof person === 'object' &&
   person !== null && !Array.isArray(person)); //true

//Như đã giải thích ở trên, typeof null và typeof [] đều trả về "object", nên
// chỉ kiểm tra typeof person === "object" không đủ để xác nhận biến đó thực sự là một đối tượng.
//  Do đó, cần thêm điều kiện person !== null và !Array.isArray(person) để đảm bảo rằng biến đó không phải là
//  null và không phải là Array.


//Array: mảng chứa danh sách các giá trị 
let colors = ['Red', 'Blue', 'Orange', 'Green']; 
console.log(Array.isArray(colors)); //true
console.log(colors instanceof Array); //true

//Khi sử dụng typeof với mảng sẽ trả về "object" chứ không phải "array". 
// Điều này là do mảng cũng là đối tượng (đối tượng đặc biệt). 
// Vì vậy chỉ dùng typeof fruits === "object" sẽ bị sai nếu giá trị biến là object hoặc null. Trường hợp này chúng ta sử dụng Array.isArray(),
// nó sẽ trả về true nếu biến là một mảng, và false nếu không phải mảng.

//Function: thực hiện các tác vụ và giúp tái sử dụng code 

function greet() {
  return 'hello world';
}
console.log(typeof greet === 'function'); //true

