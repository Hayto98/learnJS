// toán tử void
console.log(void 0); // undefined

// toán tử void mang ý nghĩa không có giá trị, được sử dụng để đánh giá một biểu thức
//và luôn trả về giá trị undefined, bất kể biểu thức đó là gì.Nói cách khác,
//void cho phép bạn thực thi một biểu thức mà không quan tâm đến kết quả của nó
//thay vào đó nó luôn trả về giá trị undefined

// void expression; // undefined

// #Tránh kết quả trả về ngoài ý muốn
// Khi bạn muốn thực thi một biểu thức mà không quan tâm đến kết quả trả về,
// bạn có thể dùng void để đảm bảo kết quả luôn là undefined.
// này nó giồng C++

// ngăn chặn hành động mặc định của liên kết
//void thường đc sử dụng trong các thẻ <a> để ngăn chặn hành động mặc định
// vd như hướng tới trang khác

// <a href="javascript:void(0);">Click me</a>
// (có thể qua trang index để chạy thử tranh nhé =)) )
//Khi nhấp vào liên kết này, trang sẽ không bị chuyển hướng hay tải lại trang vì kết quả của
// javascript:void(0) là undefined, không dẫn đến hành động nào.

// Thực tế thì trường hợp này thay các giá trị khác undefined vào vẫn ngăn chặn hành vi mặc định (trừ giá trị là chuỗi).
// Tuy nhiên, theo quy ước thì void(0) được sử dụng bởi nó tường minh, dễ
// hiểu và ngắn gọn.

// nếu bạn thay thẳng vào

// <a href="undefined;">Click me</a> // trường hợp này cũng đc nhưng sẽ có những cái cần lưu ý
// lỡ bạn có 1 biến tên là undefined thì sao nè ? mà undefined không phải là từ khóa
// vd var underfined thì vẫn chạy đc bth nha
// tuy nhiên bạn khai báo let/cost
// let undefined thì không đc nha, nó báo lỗi cái 'undefined' đã đc định nghĩa rồi
// vì dùng let và const chúng ta sẽ không khai báo biến 2 lần đc

//nên về mặt an toàn: undefined trong JS có thể bị ghi đè, dẫn đến các hành vi không mong muốn
// sử dụng void 0 luôn trả về giá trị undefined, đảm bảo rằng bạn không gặp phải các tình huống không
//mong đợi do undefined bị thay đổi
function isUndefined(value) {
  return value === void 0;
}

const colors = ["red"];

console.log(isUndefined(colors[9])); // true

// Tại sao không dùng void 1, void true, hay void bất_kỳ_gì khác?
// không có ly do kỹ thuật nào ngăn cản bạn sử dụng void 1, void true hay bất ký giá trị nào khác
//thay cho 0. Tuy nhiên, void 0 đã trở thành tiêu chuẩn và được sử dụng phổ biến bởi vì nó
//đơn giản, dễ hiểu và dễ nhận biết

//Thậm chí, các thư viện 'minify' code bằng cách thay thế undefined bằng void 0

// Điều này mang lại 2 lợi ích chính:

// Đảm bảo tính chính xác khi cần so sánh với undefined
// Giảm dung lượng bởi số ký tự của void 0 ngắn hơn undefined '
