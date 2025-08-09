function Character(name, hp, dame) {
  this.name = name;
  this.hp = hp;
  this.dame = dame;
  this.live = function () {
    // tạo một function mới trong Heap.
    return hp > 0;
  };
}

let ch1 = new Character("Hải", 100, 2);
let ch2 = new Character("Nam", 100, 5);

console.log(ch1.live == ch2.live); // false vì sao ? vì nó so sánh tham chiếu ở Heap , nó khác địa chỉ với nhau nên nó false

// còn nếu h mình dùng prototype thì sao ?
Character.prototype.message = function () {
  console.log("hello world");
};

console.log(ch1.message == ch2.message); // true vì cả 2 đều trỏ tới 1 bộ nhớ Heap

//       Stack                      Heap
//  -----------------        ----------------------
//  ch1          ────────────▶    { name: "Hải", hp: 100, dame: 2,
//                             live: [Function: live] }   ←── (live #1)
//  ch2           ────────────▶   { name: "Nam", hp: 100, dame: 5,
//                             live: [Function: live] }   ←── (live #2)

//  Character.prototype ─────▶    { message: [Function: message] } ←── (dùng chung)

// ví dụ nếu dùng các Object có sẵn trong js thì chúng ta phải dùng thông prototype

let number = new Number(123);

console.log(`${number}đ`); //123đ

// nhưng h nó in ra nhiều đi, mà muốn đổi 'đ' thành '$' chỉ đổi 1 chỗ thì sao ?

// Tình huống này là bạn muốn format lại tất cả Number object (hoặc số) khi in ra chuỗi, và chỉ cần đổi ký hiệu một chỗ thôi

Number.prototype.moneyFormat = function () {
  return `${this}vnd`;
};

console.log(number.moneyFormat()); //123vnd

//* trên thực tế, lập trình viên thường tránh việc sửa hoặc ghi đè (override) các method có sẵn của các built-in object như Number, String, Array, Object…

//? Vì sao arrow function không phù hợp cho prototype method ?

// Arrow function không có this riêng
// Arrow function không tạo ra this mới.
// this bên trong arrow function được “kế thừa” từ scope bên ngoài (lexical scope).
// Khi dùng trong prototype method, điều này làm mất khả năng tham chiếu đúng tới object.
