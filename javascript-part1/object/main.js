// object khai náo như nào
var profile = {
  name: "Thanh Hải",
  age: 20,
  gpa: 4,
};

console.log(profile);

// cách để thêm một property cho object
profile.email = "thanhhai612004@gmail.com";
console.log(profile);

// cách xóa property của object
delete profile.age;
console.log(profile);

// example:
var diaChi = "address";

var profile2 = {
  name: "Thanh Hải",
  age: 20,
  [diaChi]: "ap 5",
};

console.log(profile2); //name: 'Thanh Hải', age: 20, address: 'ap 5'

//ví dụ có method trong object
var profile3 = {
  name: "Thanh Hải",
  age: 20,
  getAge: function () {
    return this.age;
  },
};

console.log(profile3.getAge()); // đây là cách dùng
//nếu chúng ta gọi 1 property không có thì nó hiện undefind
// ví dụ
console.log(profile3.address); //undefined

//object constructor : xây dựng đối tượng

function User(firstName, lastName, avatar) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.avatar = avatar;
}

var user = new User("Thanh", "Hải", "avt");
var admin = new User("Thanh", "Nam", "avt");

user.cmt = "hello các bạn"; 
admin.title = "tôi là coder";

console.log(user);
console.log(admin);

