var age = 20;
console.log(typeof age);
// NaN là đại diện cho kiểu số không hợp lệ 
var result = 123 / "abc"; 
// để kiểm tra coi có phải NaN k thì js có hỗ trợ hàm 
// isNaN(..)
console.log(isNaN(result));

//toString() giúp mình đổi number thành string 
// nếu là số là nó là tím xanh 
// còn nếu đen là string 

// toFixed() nó giúp bạn làm thập phân thành nguyên 
// lưu ý dùng toFixed nó sẽ trả về string 

console.log(isFinite(10));          // true (10 là số hữu hạn)
console.log(isFinite(Infinity));    // false (Infinity không hữu hạn)
console.log(isFinite(-Infinity));   // false (-Infinity không hữu hạn)
console.log(isFinite(NaN));         // false (NaN không phải số hữu hạn)
console.log(isFinite('123'));       // true ('123' được chuyển thành số 123)
console.log(isFinite('abc'));       // false ('abc' không thể chuyển thành số)

//isFinite chỉ nhận số mới trả ra true còn lại là flase


