//? phương thức forEach

//* forEach là gì?
// forEach là một phương thức trong JavaScript cho phép thực hiện một hàm lên mỗi phần tử của
// mảng. Phương thức này không trả về giá trị mới mà chỉ thực hiện hành động lặp qua và xử lý các phần tử của mảng.
//* Cú pháp
// array.forEach(function(item, indexItem , arr), thisValue)

// áp dụng tính sum
let ch = [1, 2, 3, 4, 5];
let sum = 0;
ch.forEach(function (item) {
  sum += item;
});
console.log(sum);

//* Dùng forEach để thêm thuộc tính mới vào mỗi đối tượng trong mảng
const users = [
  { name: "Thanh Hai", age: 18 },
  { name: "Thanh Nam", age: 20 },
];
users.forEach(function (item) {
  item.speed = 100;
  console.log(item);
});
console.log(users);

// trong mảng mà có empty thì dùng forEach nó sẽ không xử lý empty
const fruits = ["apple", "banana", "cherry"];

delete fruits[1];
console.log(fruits); // ['apple', empty, 'cherry']
// dùng forEach
fruits.forEach(function (item) {
  console.log(item);
  //Output:
  // apple
  // cherry
});
// còn for thường thì có duyệt qua các mãng
for (let i = 0; i <= fruits.length - 1; i++) {
  console.log(fruits[i]);
}
// Output:
// apple
// undefined
// cherry

//* khác biệt Foreach và for (while)

const demo = [1, 2, 3, 4, 5, 6, 7, 8, 9];
demo.forEach(function (item) {
  if (item == 2) {
    return;
  }
  console.log(item);
});
//Ouput
// 1
// 3
// 4
// 5
// 6
// 7
// 8
// 9

//? Tính năng của forEach so với vòng lặp truyền thống:
// forEach không thể sử dụng break hay continue, chỉ xử lý phần tử có giá trị, trong khi vòng lặp truyền thống cho phép điều khiển chi tiết hơn qua break,
// continue và xử lý cả phần tử trống.

//?Khi nào nên dùng forEach hoặc vòng lặp truyền thống:
// Dùng forEach cho việc áp dụng hàm đơn giản lên các phần tử mà không cần điều khiển quá trình lặp, dùng vòng lặp truyền thống khi cần
// quản lý chi tiết hơn về quá trình lặp hoặc khi hiệu suất là ưu tiên.

// thiết kế forEach2() : theo ý tôi

Array.prototype.forEach2 = function (callback, thisArg) {
  let length = this.length;
  for (let i = 0; i <= length - 1; i++) {
    if (i in this) {
      callback.call(thisArg, this[i], i, this);
    }
  }
};
const sparseArr = [1, , 3]; // Lưu ý phần tử thứ 2 bị trống
sparseArr.forEach2(function (value, index) {
  console.log(this);
  console.log(`Value: ${value}, Index: ${index}`);
});
// Value: 1, Index: 0
// Value: 3, Index: 2

const obj = {
  numbers: [1, 2, 3, 4],
  add: function (num) {
    this.numbers.push(num);
  },
  // this sẽ đc định nghĩa ở đây
  import(nums) {
    nums.forEach((item) => this.add(item));
  },
};

obj.add(5);
// muốn thêm nhìu hơn thì sao
obj.import([6, 7]);
console.log(obj.numbers);
