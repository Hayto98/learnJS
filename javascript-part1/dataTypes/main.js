// Trong JS có 8 kiểu dữ liệu :
// String
// Number
// Bigint
// Boolean
// Undefined
// Null
// Symbol
// Objec

//Sự khác biệt giữa các kiểu dữ liệu chủ yếu nằm ở mục đích sử dụng,
// cách chúng lưu trữ và cách thức làm việc với chúng

/* String (chuỗi): 
    sử dụng khi cần biểu diễn văn bản 
*/

let welcomeJS = "hello world";
console.log(typeof welcome); //string

// Number (số): 
  //sử dụng khi làm việc với toán học và số học 

let myAge = 18; 
console.log(typeof age); //number

//Bigint (số lớn): 
  //khi bạn cần đại diện cho các con số lớn, mà giá trị của chúng vượt quá giới hạn của kiểu Number 
  //thông thường (2^53-1, tương đương với khoảng 9007199254740991)
  
  // có 2 kiểu 
  let largeNumber = BigInt("9007199254740991");
  let bigNumber = 9007199254740991n; 

  console.log(typeof largeNumber);
  console.log(typeof bigNumber);
  
// Boolean (đúng/ sai)
  //sử dụng khi cần biểu diễn đúng sai hoặc có không 

  let isLoggedIn = true; 
  console.log(typeof isLoggedIn); //boolean

  //Quy ước đặt tên: Thường bắt đầu với các từ 
  //như ‘is’, ‘can’, ‘has’, ‘should’ để phản ánh rõ ràng giá trị đúng/sai.
// Undefined (không xác định/ chưa được khởi tạo)
  // sử dụng khi một biến được khai báo nhung chưa được gán giá trị 

  let userLocation ; 
  console.log(typeof userLocation); //undefined 

//Null (chưa có gì/ trống rỗng)
  //sử dụng khi cần thể hiện rằng một biến chưa có giá trị cụ thể, hoặc không tìm thấy dữ liệu

  let searchResult = null; 
  console.log(typeof searchResult); //object 
// vì trong JS, mặc dù null không phải là một đối tượng do cách JS được thiết kế, typeof 
//trả về "object" cho null. Điều này đc biết đén là một "bug" hay sai sót của ngôn ngữ này
//nhưng nó đã trở thành một phàn của tiêu chuẩn và cần phãi được nhớ khi kiểm tra kiểu dữ liệu của một biến 

// Symbol (giá trị duy nhất)
  // sử dụng khi cần tạo ra một giá trị duy nhất 

  let uniqueID = Symbol('id'); 
  console.log(typeof uniqueID); // symbol 

//Object (đối tượng)
  // sử dụng khi cần lưu trữ và quản lý dữ liệu theo cấu trúc key-value (khóa- giá trị)
  let user = {
    name : 'To Thanh Hai', 
    age: 18
  }
  console.log(typeof uses); //object
// quy ước đặt tên: thường là sử dụng danh từ số ít, mô tả cho thực thể mà nó đại diện 

// thường thì Bigint và Symbol sẽ khá là ít thấy hơn so với các kiểu dữ liệu khác 
// lý do chính cho việc sử dụng ít của Bigint và Symbol có thể được giải thích như sau:
  //  Bigint: được sử dụng chủ yếu khi làm việc với các số rát lớn mà kiểu Number thông thường 
  //không thể xử lý chính xác (số lón hơn 2^53-1). Trong thực tế lập trình hàng ngày, tình huống
  //yêu cầu xử lý các số lớn đến mức này khá hiếm gặp 

  //  Symbol: đc thiết kế để tạo các thuộc tính duy nhất cho các đối tượng, nhưng nhu cầu này
  //không giải là phổ biến trong mọi ứng dụng JS. Symbol thường đc sử dụng trong các trường hợp
  //cần đảo bảo tính duy nhất hoặc tránh xung đột tên thuộc tính 

//# Dạng đặc biệt của Object 
  // Array (Mảng)
  //sử dụng khi cần lưu trữ một danh sách các mục, chẳng hạn như danh sách tên các sản phẩm 

  let products = ["iphone", "samsung", "oppo"]
console.log(typeof products); //Object 
//Quy ước đặt tê thường là số nhiểu. Thể hiện rằng biến chứa nhiều mục 

  // Function (hàm)
  //sử dụng khi cần thực hine65 một tác vụ lặp đi lặp lại 

  function sumNumber(a,b) {
    return a + b;
  }
  console.log(typeof sumNumber); //function 
  
  
  