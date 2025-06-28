// lodash là thư viện hỗ trợ trong JS
// nay chúng ta hc về so sánh chuyên sâu Object
// trong JS để kiểm tra object có cùng tham chiếu hay không, nếu không cùng tham chiếu
// mà các property và method của nó giống nhau, nhưng chúng vẫn không đc coi là bằng nhau

// nếu dùng JSON.stringify thì nó sẽ biến objetc thành json để so sánh
// coi như là so sánh 2 chuỗi với nhau, nhưng cách này có hạn chế của nó, khi object có
//property hay method đặt ở vị trí khác nhau thì không so sánh đc

// còn cách khác khi dùng Lodash: đây là thư viện so sánh object sâu của JS
// _.isEqual(obj1,obj2): so sánh chi tiết các thuộc tính của object

const student1 = {
  nameSchool: "FPT",
};

const student2 = {
  nameSchool: "FPT",
};

console.log(_.isEqual(student1, student2)); //true

///Pass by value and pass by reference
// Pass by value là khi một biến được truyền và hàm, giá trị của biến đó được
// sao chép và bản sao này đc sử dụng trong hàm dưới dạng tham số. Khi gán giá trị mới cho
//tham số trong hàm sẽ không làm thay đổi giá trị của biến gốc bên ngoài hàm
function changeValue(y) {
  y = 20;
  console.log(y); //20
}

let x = 10;
changeValue(x);
console.log(x); //10

// vậy còn pass by reference thì sao ?
/// trong JS không có pass bt reference,nó là khi một tham chiếu (địa chỉ bộ nhớ)
// đến biến gốc được truyền vào hàm dưới dạng tham số. Khi gán lại giá trị của tham số này
// thì ngay lập tức giá trị của biến gốc bên ngoài hàm cũng bị thay đổi theo

function changObject(objB) {
  objB = {
    name: "object B",
  };
  return objB;
}

const objA = {
  name: "object A",
};
console.log(changObject(objA)); // objB
