// Vòng lặp for-in và for-of là hai cấu trúc lặp cung cấp trong JavaScript để duyệt qua các cấu trúc dữ liệu phức tạp như object và mảng, mỗi loại phục vụ một mục đích khác nhau.

/**
 * for in duyệt qua các thuộc tính của một object. thích hợp khi bạn cần truy cập vào tất cả các keys của một object 
 */

/**
 * for of thì duyệt qua các giá trị của tất cả các phần tử trong một mảng và chuỗi. Là sự lựa chọn tốt khi bạn cần xử lý từng giá trị của một cấu trúc dữ liệu có thể duyệt được như mảng và chuỗi
 */


let ch = "hello world";
let result = "";
for (let item of ch) {
  result += item;
}
console.log(result);

let arr = [1, 2, 32, 3, 3, 4, 5, 5, 12];
for (let item of arr) {
  console.log(item);
}

let obj = {
  name: "Hải",
  age: 21,
  address: "Long Hòa",
};

for (let item in obj) {
  console.log(`${item}: ${obj[item]} `);
}

const product = {
  id: 1,
  name: "Điện thoại thông minh",
  price: 15000000,
};

const requiredProps = ["id", "name", "price"];

console.log("Kiểm tra thuộc tính sản phẩm:");

for (let item of requiredProps) {
  if (item in product) {
    console.log(`sản phải có: ${product[item]}`);
  } else {
    console.log(`sản phải không có: ${item}`);
  }
}

let object = [
  {
    name: "Hải",
    age: 21,
    address: "ap 5",
  },
  {
    name: "Kiet",
    age: 20,
    address: "ap 3",
  },
  {
    name: "Nam",
    age: 22,
    address: "ap2",
  },
];
let researchName = "ap 5";
for (let item of object) {
  for (let i in item) {
    if (item[i] == researchName) {
      console.log(item);
    }
  }
}

