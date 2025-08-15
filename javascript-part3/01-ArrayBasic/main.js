//? Thêm và xóa phần từ

//* push(): là thêm phần từ sau mảng, và nó return ra chiều dài của mảng
// ex:
let demo = ["tào", "cam", "thơm"];
let ch = demo.push("dưa");
console.log(ch); // 4
console.log(demo); //['tào', 'cam', 'thơm', 'dưa']

//* pop(): là xóa đi phần từ cuối mảng và return ra phần tử đó
let demo2 = ["tào", "cam", "thơm"];
let ch2 = demo2.pop();
console.log(ch2); // thơm
console.log(demo2); // ['tào', 'cam']

//* unshift(): là thêm phần tử ở đầu mảng và return chiều dài của mảng
let demo3 = ["tào", "cam", "thơm"];
let ch3 = demo3.unshift("đào");
console.log(ch3); //4
console.log(demo3); //['đào', 'tào', 'cam', 'thơm']

//* shift(): là xóa phần từ ở đầu mảng và return ra phần tử bị xóa
let demo4 = ["tào", "cam", "thơm"];
let ch4 = demo4.shift();
console.log(ch4); //tào
console.log(demo4); // ['cam', 'thơm']

//? tìm kiếm và kiểm tra phần tử

//* indexOf(): tìm phần tử trong mảng và return ra vị trí phần tử đó trong mảng, nếu phần tử đó không có trong mảng nó sẽ trả -1

let demo5 = ["tào", "cam", "thơm", "đào", "nhãn", "sầu riêng"];
let ch5 = demo5.indexOf("cam"); // 1
let ch6 = demo5.indexOf("ổi"); // -1
console.log(ch5);
console.log(ch6);

//* lastIndexOf(): tìm phần tử trong mảng từ phải sang trái và return ra vị trí trong mảng
//Lưu ý: Tìm kiếm từ cuối mảng về đầu mảng.
let demo7 = ["tào", "cam", "thơm", "đào", "cam", "sầu riêng"];
console.log(demo7.lastIndexOf("cam")); //4
console.log(demo7.lastIndexOf("ổi")); //-1

//* includes(): tìm phần tử có ở trong mảng hay không, và return true or false

let demo8 = ["tào", "cam", "thơm", "đào", "lê", "sầu riêng"];
console.log(demo8.includes("cam")); //true
console.log(demo8.includes("ổi")); //false
