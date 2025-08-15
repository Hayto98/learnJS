//? Phương thức bind

const person = {
  firstName: "Jack",
  sayHi(admin) {
    console.log(`hello ${this.firstName}, tôi là ${admin}`);
  },
};

const object1 = person.sayHi;
object1("Hải"); // hello undefined, tôi là Hải
// vì sao lại undefined ? vì this đang global context

//* cách xử lý
const object2 = person.sayHi.bind(person); // => bind sẽ sao chép cái hàm person.sayHi ra hàm mới , nó đảm bảo rằng this sẽ đc tham chiếu (person)
object2("Nam"); //hello Jack, tôi là Nam

//? Phương thức bind tạo ra một hàm mới mà khi được gọi, từ khóa this sẽ được tham chiếu tới bởi đối tượng đã cho.
//? const newFunc = oldFunction.bind(thisArg[, arg1[, arg2[, ...]]]);

const person1 = {
  firstName: "Jack",
  sayHi(object) {
    console.log(`hello ${this.firstName}, tôi là ${object}`);
  },
};

// ngoài ra nó còn "Mượn" các phương thức của đối tượng khác
// ex:
const person2 = {
  firstName: "Hải",
};

const getSayHi = person1.sayHi.bind(person2);
getSayHi("Huy"); //hello Hải, tôi là Huy

// ngoài ra nó còn có thể chuyền giá trí như sau:

const person3 = {
  firstName: "Tâm",
  sayHi(object, object1, object2) {
    console.log(object1);
    console.log(object2);
    console.log(`hello ${this.firstName}, tôi là ${object}`);
  },
};

const getSayHi2 = person3.sayHi.bind(person3, "ABC");
getSayHi2(); // hello Tâm, tôi là ABC <= nó sẽ gàn đối số vào
// nếu chuyền tiếp thì sao ?
getSayHi2("DEF", "HiHi"); //  DEF
//  HiHi
//  hello Tâm, tôi là ABC

// bình thường chúng ta sẽ coi ai gọi phương thức để xác định this, nhưng khi có bind thì chúng ta chỉ quan tâm bind và không quan tâm ai gọi phương thức

//* tóm lại bind
// hương thức bind tạo ra một hàm mới với từ khóa this được tham chiếu tới bởi đối tượng đã cho
// Ứng dụng:
// Chỉ định ngữ cảnh this cố định cho hàm.
// Mượn phương thức từ đối tượng khác.

// bài tập minh họa về bind
const app = {
  log(data) {
    console.log(data);
  },
  batch(list) {
    for (let item of list) {
      this.log(item);
    }
  },
};

let getDataApp = app.batch.bind(app);
getDataApp([
  { id: 1, name: "Item 1" },
  { id: 2, name: "Item 2" },
  { id: 3, name: "Item 3" },
]);

//? Phương thức call: Tương tự như bind ở điểm chỉ định ngữ cảnh this, call khác bind ở điểm thay vì trả về một hàm mới thì call sẽ thực hiện gọi hàm ngay.

function introduce(object, admin) {
  console.log(
    `hello ${object}, tôi là ${admin} tài khoản của tôi hiện có ${this.money}$`
  );
}

let player = {
  money: 100,
};

let getIntroduce = introduce.bind(player);
getIntroduce("Huy", "Hải"); // hello Huy, tôi là Hải tài khoản của tôi hiện có 100$
getIntroduce("Khang", "Hải"); // hello Khang, tôi là Hải tài khoản của tôi hiện có 100$
getIntroduce("Thịnh", "Hải"); // hello Thịnh, tôi là Hải tài khoản của tôi hiện có 100$

//    |
//    V
// nếu dùng call thì sao
introduce.call(player, "Tài", "Hải"); //hello Tài, tôi là Hải tài khoản của tôi hiện có 100$
// nó k tạo ra hàm mới mà trực tiếp gọi hàm luôn

//? Phương thức apply: Tương tự như call, điểm khác là apply nhận các đối số dưới dạng một mảng.
// nó sẽ (bind : ràng buộc) this rồi sao đó chuyền mảng

introduce.apply(player, ["Nguyễn Văn A", "Lê Thị B"]); //hello Nguyễn Văn A, tôi là Lê Thị B tài khoản của tôi hiện có 100$
//                            |              |
//                            V              V
//                      đối số thứ 1    đối số thứ 2

// bài tập áp dụng với apply()
function sum(a, b, c) {
  return a + b + c;
}
let ch = [1, 2, 3];

// cách dùng
let result = sum.apply(null, ch);
console.log(result); // 6

//* keyword trong bài này là gì ?
// nếu dùng bind() thì nó sẽ không gọi hàm, copy ra hàm mới, bind sẵn các giá trị cho các tham số hàm
// nếu dùng call() thì nó gọi hàm ngay, truyền đối số cách nhau bằng dấu phẩy (,).
// neu1 dùng apply() thì nó gọi hàm nay , và truyền đối số ở dạng một mảng

//* cả 3 thằng:
// đều chỉ định "this" sẽ tham chiếu tới đối tượng cụ thể
// đều không sử dụng được với arrow function

//* Tại sao cần sử dụng call và apply?
// Phương thức call và apply rất hữu ích khi bạn cần gọi một hàm ngay với một giá trị this cụ thể và các đối số tùy ý.

//* Ưu điểm khi dùng:

// Linh hoạt trong việc truyền các đối số cho hàm.
// ex:
let number = [12, 2, 3, 1, 99, 22];
// nếu dùng
Math.max(12, 2, 3, 1, 99, 22); // dữ liệu nằm trong mảng với số phần tử không cố định => không dùng đc
// nên dùng
let maxNumber = Math.max.apply(null, number);
console.log(maxNumber); // 99

// Thích hợp cho các trường hợp khi bạn không biết trước số lượng đối số.
function sum2() {
  // arguments là một đối tượng giống mảng chứa tất cả tham số được truyền vào
  let total = 0;
  for (let i = 0; i < arguments.length; i++) {
    total += arguments[i];
  }
  console.log(`Tổng là: ${total}`);
}

// Sử dụng call - truyền đối số rời rạc
sum2.call(null, 1, 2, 3); // Tổng là: 6
sum2.call(null, 5, 10, 15, 20); // Tổng là: 50

// Sử dụng apply - truyền đối số dạng mảng
sum2.apply(null, [4, 8, 12]); // Tổng là: 24
sum2.apply(null, [7, 14, 21, 28]); // Tổng là: 70
