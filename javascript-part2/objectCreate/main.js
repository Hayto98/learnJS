// const Character = function (name, hp, dame) {
//   this.name = name;
//   this.hp = hp;
//   this.dame = dame;
// };
// Character.prototype.attack = function (you) {
//   you.hp = you.hp - this.dame;
// };

// let ch = new Character("A", 100, 20);
// console.log(ch);

let prototype = {
  tuVe: 100,
  attack(object) {
    object.hp = object.hp - this.dame;
  },
};

const demo1 = Object.create(prototype);
//Object.create dùng để tạo ra 1 objetc mới và có thể chỉ định prototype cho nó
demo1.name = "Hai";
demo1.old = "22";

console.log(demo1);

// Ưu điểm khi dùng hàm tạo:
// - Giống như một cái khuôn, đảm bảo tất cả instance được tạo ra có cấu trúc ban đầu giống nhau.
// - Dễ tổ chức và quản lý khi dự án lớn.
// Nhược điểm:
// - Cấu trúc khởi tạo cố định (các property được set sẵn).
// - Phải dùng từ khóa `new` và đôi khi verbose hơn.

// Ưu điểm khi dùng Object.create():
// - Linh hoạt: có thể tạo object mới và chỉ định prototype bất kỳ.
// - Thích hợp khi nhiều object cần dùng chung prototype nhưng khác nhau về property.
// Nhược điểm:
// - Dễ mất tính thống nhất giữa các object (khó quản lý khi số lượng lớn).
// - Không có “bước khởi tạo” rõ ràng như hàm tạo, nên đôi khi code khó đọc hơn.
