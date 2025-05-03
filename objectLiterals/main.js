const person = {
  nameUser: "Nam",
  // age: 21,
  address: "SG",
};

// kỹ thuật phân rã person
// person destructuring là một kỹ thuật trong JavaScript giúp bạn “phân rã” person,
// cho phép truy cập nhanh chóng và trực tiếp vào một hoặc
// nhiều thuộc tính của person mà không cần phải truy cập từng thuộc tính một.

// Điều này làm cho code của bạn trở nên sạch sẽ và dễ đọc hơn,
// đặc biệt khi bạn cần sử dụng nhiều thuộc tính từ cùng một person.
const { nameUser, address } = person;

console.log(`${nameUser} đang sống ở ${address}`);
// Sử dụng person destructuring giúp làm giảm số lượng code khi truy cập các thuộc tính của person, từ
// đó code trở nên rõ ràng và dễ đọc hơn.

if ("age" in person) {
  console.log(`Tuổi : ${person.age}`);
} else {
  console.log("không có");
}

person.nameUser = "Hai";
console.log(person);

// tại sao chúng ta đc học là khai báo hằng số (const) thì không được phép thay đồi mà với object lại đc ?
// => thì khi ta khời tạo object thì địa chỉ object được lưu vào heap, có thể thay đổi vì bạn không
// thay đổi tham chiếu của biến object

////////////////////////////////////////////////////////////////////////////////////////////////
//Bài tập

let arr1 = [1, 2, 3, 4, 2, 2, 1, 1, 3, 3, 3, 5, 4, 3];
// tìm giá trị xuất hiện nhiều trong mảng

function searchItem(arr) {
  let obj = {};
  let maxItem = arr[0];
  let maxCount = 0;
  for (let i = 0; i < arr.length; i++) {
    let num = arr[i];
    if (num in obj) {
      obj[num] += 1;
    } else {
      obj[num] = 1;
    }
    if (maxCount < obj[num]) {
      maxCount = obj[num];
      maxItem = num;
    }
  }
  return maxItem;
}

console.log(searchItem(arr1));

/**
 * tìm hiểu về thuộc tính và phương thức
 */
//object là đối tượng dùng để mô tả các thực thể xung quanh chúng ta

//thuộc tính là các giá trị được lưu trữ trong object. Mỗi thuộc tính có một tên (key) và một giá trị (value) tương ứng.
//Giá trị của thuộc tính có thể là bất kỳ kiễu dữ liệu nào trong JS, kể cả là một object khác
// cách đặt tên thường là : danh từ

//phương thức: là các hàm được định nghĩa bên trong object. Các phương thức này có thể thực thi các hành động trên dữ liệu được lưu trữ
// trong object hoặc thực hiện các chức năng khác liên quan đến object đó
// cách đặt tên thường là: động từ
//example:

const studentManager = {
  //Thuộc tính
  name: "Nam",
  age: 21,
  gender: "male",
  //Phương thức
  add: function () {
    console.log("chức năng add");
  },
  edit: function () {
    console.log("chức năng edit");
  },
  remove: function () {
    console.log("chức năng xóa");
  },
};

console.log(studentManager.remove); // cái này là gọi hàm
console.log(studentManager.remove()); // cái này là gọi thực thi hàm

////////////////////////////////
//Tìm hiểu về từ khóa this

// this là từ khóa trong JS, tham chiếu đến đối tượng mà nó thuộc về. Giá trị của this phụ thuộc vào ngữ cảnh mà nó được sử dụng

const person2 = {
  fisrtName: "Hải",
  lastName: "Thanh",
  getFullName: function () {
    console.log(this); //console.log(person);
  },
  getUser: function () {
    return `${this.fisrtName} ${this.lastName}`;
  },
  info: {
    name: "Hayto",
    address: "ấp 5",
    getInfo: function () {
      console.log(this); // this lúc này là info nhé
      return `${this.name} ở ${this.address}`;
    },
  },
};

person2.getFullName(); //in ra person2
console.log(person2.getUser()); //Thanh Hải

// this lúc này là object mà nó thuộc về
console.log(person2.info.getInfo());

///// Tại sao cần sử dụng this ?
//this cung cấp một phương thức linh hoạt để truy cập vào đối tượng mà function đang thao tác.
// điều này không chỉ tăng cường khả năng tái sử dụng và bảo trì code mà còn giúp làm cho chương trình của chúng ra dễ hiểu và quản lý hơn
const person3 = {
  name: "Alice",
  greet: function () {
    // Nên viết là
    console.log("Hello, " + this.name);

    // Thay vì
    //console.log('Hello, ' + person.name);
  },
};

person3.greet(); // Hello, Alice
