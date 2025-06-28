function isValueUndefined(value) {
  return void 0 === value;
}

// Sample usage
console.log(isValueUndefined(undefined)); // true
console.log(isValueUndefined(void 0)); // true
console.log(isValueUndefined(null)); // false
console.log(isValueUndefined(0)); // false
console.log(isValueUndefined("")); // false

console.log(typeof null);

console.log(typeof void 0);

console.log(null == undefined); // vì cả 2 điều biểu diễn k có gì
// let value;

// Với typeof
console.log(typeof value === "undefined"); // true

// Với === void 0
// console.log( value === void 0); // Lỗi ReferenceError

console.log(parseInt(0.0000005)); // 5 vì nó sẽ chuyển qua chuỗi ký hiệu khoa học
// 5e-7 nên nó nhận 5 đầu, sau đó e k phải là số

//ép kiểu là gì ?
//ép kiểu (type coercion) trong JS là quá trình chuyển đổi giá trị từ một kiểu dữ liệu này sang
// một kiểu khác.Điều này thường xảy ra tự động, chẳng hạn khi sử dụng toán tử so sánh == hoặc các
// toán tử số học +,-,vv
//ex:
let demo = "3" + 2; //32

//Ép kiểu rõ ràng và ép kiểu ngầm
//ép kiểu rõ ràng là khi bạn chủ động chuyển đổi kiểu dữ liệu bằng cách sử dụng các hàm như
//Number(), String(), Boolean(),v.v.
//ex:
Number("123");

// trong JS, mỗi kiểu dữ liệu cơ bản đều có các hàm chuyển đổi tương ứng để thực hiện chuyển đổi giữa các kiểu:
// kiểu số(number) :  có hàm Number() để chuyển đổi giá trị sang kiểu số
Number("123"); //123
Number("3.14"); //3.14
Number("abc"); //NaN (Not a Number)
Number(true); //1
Number(false); //0

//kiểu String(): có hàm String() để chuyển đổi giá trị sang kiểu chuỗi
String(123); //'123'
String(3.14); //'3.14'
String(true); // 'true'
String(null); //'null'
String(undefined); //'undefined'

//kiểu Boolean : có hàm Boolean() để chuyển đổi giá trị sang kiểu boolean
Boolean(0); //false
Boolean(1); //true
Boolean("hello"); //true
Boolean(null); //false
// Quy tắc : các giá trị 'falsy' sai bao gồm: 0,""(chuỗi rỗng), null, undefined, NaN và false
// tất cả các giá trị khác đều là 'truthy'

//kiểu đối tượng (object): có hàm Object() để tạo hoặc chuyển đổi giá trị thành đối tượng
Object(); //tạo ra một đối tượng trống
Object(123); //tạo ra một đối tượng Number
Object("abc"); //tạo ra một đối tượng String
Object(true); //tạo một đối tượng Boolean

//kiểu mảng: có hàm Array() để tạo mảng mới hoặc chuyển đổi giá trị thành mảng
Array(); // tạo một mảng trống
Array(1, 2, 3); // [1,2,3]
Array(5); // tạo ra một mảng có 5 phần tử trống

//kiểu function: có hàm Function() để tạo hàm mới
Function("a", "b", "return a + b");

//// đây là kiểu viết thông thường: (nên dùng)
// function add(a, b) {
//   return a + b;
// }

//vấn đề về bảo mật: nếu dùng hàm Function() kẻ tấn công có thể chèn mã độc vào chuỗi, và mã này sẽ
// đc thực thi khi hàm Function() đc gọi
// vấn đề hiệu suất:
// hàm thông thường đc phân tích cú pháp và biên dịch một lần khi mã JS đc tải
// Điều này có nghĩa là khi hàm được gọi nhiều lần, JavaScript engine không cần phải thực hiện lại quá trình
// phân tích cú pháp và biên dịch.
/////=> hàm thông thường rất nhanh và hiệu quả

//hàm new Function() tạo một hàm mới từ một chuỗi mã
// Trong mỗi lần gọi new Function(), JavaScript engine phải phân tích
// cú pháp và biên dịch chuỗi mã thành mã máy.
/////=> Quá trình này tốn kém về hiệu suất, đặc biệt khi hàm được gọi nhiều lần.

//null và undefined: Không có hàm chuyển đổi kiểu dữ liệu tương ứng.

/////Các trường hợp ép kiểu phổ biến
//ép kiểu sang chuỗi
// bất kỳ kiểu dữ liệu nảo trong JS cũng có thể đc chuyển đổi thành chuỗi. Dưới dây là 3 phương pháp

// Cách 1: Sử dụng hàm String()
String(123); //'123'
// Cách 2: Sử dụng phương thức toString()
(123).toString(); // '123'
//lưu ý: không áp dụng được cho 'null' và 'undefined'

// Cách 3: Nối chuỗi hoặc Template literals
`${123}`; // 123
1213 + ""; //123

///Ép kiểu sang số
//Dưới đây là một số cách chuyển đổi giá trị sang kiểu số trong JavaScript
// let ch = prompt("nhập đi: ");
// console.log(ch);

//Cách 1: si73 dụng hàm Number()
Number("123"); //123
Number(true); //1
Number(null) + //0
  //Cách 2: Sử dụng toán tử cộng +
  "456" + //456
  true; //1
+null; //0
// Lưu ý: Các giá trị "" (chuỗi rỗng), "0" (chuỗi chứa số 0), "000", 0, -0, null, false, [] và
// new Date(0) khi ép kiểu sang Number sẽ trả về 0.

// Các giá trị là chuỗi không phải là số ("abc"), undefined, và NaN không chuyển đổi thành 0 khi sử dụng Number() hoặc +.
// Thay vào đó, chúng sẽ trả về NaN (Not-a-Number).
//ex:
Number("abc"); //NaN
Number(undefined); //NaN

//Cách 3: Sử dụng parseInt() và parseFloat()
parseInt("123", 10);
parseFloat("123.45"); //123.45

// Lưu ý: Cách hoạt động của parseInt() và parseFloat() khác với các cách ép kiểu sang Number ở trên. Cụ thể, nó hoạt động như sau:

// Khi đầu vào là một chuỗi: parseInt() và parseFloat() sẽ phân tích chuỗi đó để tìm số đầu tiên và
// chuyển số đó sang kiểu Number. Nếu không tìm thấy số nào, kết quả sẽ là NaN.
// Khi đầu vào không phải chuỗi: parseInt() và parseFloat() trước tiên sẽ chuyển giá trị đó thành chuỗi.
// Sau đó, thực hiện quá trình phân tích như bước trên.

// ===> khi dùng parseInt() nó sẽ chuyển giá trị đầu vào thành chuỗi, sau đó mới phân tích chuỗi đó
//để trả về một số nguyên nếu không phải là số thì nó trả về NaN

parseInt("123abc"); //parseInt() sẽ phân tích "123" và trả về 123.
parseInt("abc123"); //parseInt() sẽ gặp "a" đầu tiên, không phải là số, và trả về NaN.
parseInt(" 123"); //parseInt() bỏ qua khoảng trắng và trả về 123.

//Ép kiểu sang Boolean
// có hai cách chính để chuyển đổi giá trị sang kiểu boolean
//Cách 1: sử dụng hàm Boolean()
Boolean(1); // true
Boolean(0); // false
Boolean("hello"); // true
Boolean(""); // false
//Cách 2: sử dụng toán tử NOT hai lần !!
!!0; //false
!!1; //true
// Chỉ có 6 giá trị sau đây khi ép kiểu sang boolean sẽ trả về false: false, 0, "" (chuỗi rỗng), null, undefined, và NaN.
// Mọi giá trị khác khi ép sang boolean đều trở thành true.

/* 
  Quy tắc ép kiểu ngầm 
*/
//Ép kiểu ngầm với toán tử so sánh ==
// Trong JavaScript, khi so sánh hai giá trị x và y với nhau bằng cách sử dụng x == y, kết quả sẽ trả về true hoặc false. Quá trình so sánh này được thực hiện như sau:

// Nếu x và y cùng kiểu dữ liệu:
// Nếu cả hai là undefined hoặc null, trả về true.
// Nếu là số:
// Nếu một trong hai là NaN, trả về false.
// Nếu cả hai số giống hệt nhau, trả về true.
// Nếu là chuỗi, so sánh từng ký tự (cùng độ dài và giống nhau từng ký tự theo vị trí) để xác định chúng có giống hệt nhau không.
// Nếu là boolean, trả về true nếu cả hai cùng true hoặc cùng false.
// Nếu x là null và y là undefined, hoặc ngược lại, trả về true.
// Nếu một trong hai là số và cái kia là chuỗi, chuyển đổi chuỗi thành số rồi so sánh.
// Nếu một trong hai là boolean, chuyển đổi boolean thành số rồi so sánh.
// Nếu một trong hai là đối tượng và cái kia là chuỗi hoặc số, chuyển đổi đối tượng thành giá trị nguyên thủy rồi so sánh.
// Nếu không thỏa mãn các trường hợp trên, trả về false.

//        <chú ý>

// Trong trường hợp “Nếu x là null và y là undefined, hoặc ngược lại, trả về true,” không có sự ép kiểu ngầm định giữa null và undefined.
// Đây là một quy tắc đặc biệt trong JavaScript khi sử dụng toán tử so sánh bằng lỏng lẻo (==).
// Theo quy tắc này, null và undefined được coi là bằng nhau mà không cần chuyển đổi kiểu dữ liệu của chúng. Điều này có nghĩa là không có sự chuyển đổi kiểu dữ liệu nào xảy ra;
// JavaScript đơn giản chỉ coi chúng là giống nhau trong trường hợp cụ thể này (so sánh ==).

//Ép liểu về mặt toán tử số học

// Toán tử cộng (+)
// Trong JavaScript, toán tử cộng (+) có thể thực hiện cả phép cộng số học và nối chuỗi. Cách hoạt động của nó được xác định như sau:

// Xem xét giá trị của biểu thức bên trái và bên phải của toán tử.
// Chuyển đổi giá trị này sang kiểu nguyên thủy (ToPrimitive).
// Nếu một trong hai giá trị sau khi chuyển đổi là chuỗi, thực hiện nối chuỗi.
// Nếu không, chuyển đổi cả hai giá trị sang số (ToNumber) và thực hiện phép cộng.
// Ví dụ:

"5" + 2; //sẽ có kết quả là "52" (nối chuỗi).
5 + "2"; //cũng sẽ trở thành "52".
5 + 2; //sẽ có kết quả là 7 (phép cộng số).
// Toán tử trừ (-)
//Toán tử trừ (-) chỉ thực hiện phép trừ số học. Trong quá trình này, toán tử trừ chuyển đổi cả hai giá trị sang số rồi mới thực hiện phép trừ.

5 - "2"; //sẽ trả về 3 (chuyển "2" thành số).
"10" - "2"; //sẽ trả về 8 (chuyển "10" và "2" thành số).

// let numberA = +prompt("Nhập số A: ");
// let numberB = +prompt("Nhập số B: ");

// function isNumber(value) {
//   return typeof value === "number" && !isNaN(value);
// }

// if (isNumber(numberA) && isNumber(numberB)) {
//   console.log(`Tổng 2 số là : ${numberA + numberB}`);
// } else {
//   console.log("số không hợp lệ");
//   1;
// }
