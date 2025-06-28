/*
    vòng lặp - loop 
    1 for lặp với điếu kiện đúng 
    2 for/in lặp qua key cũa đối tượng 
    3 for/of lặp qua value của đối tượng 
    4 while lặp khi điều kiện đúng 
    5 do/while lặp ít nhất 1 lần, sau đó lặp khi điều kiện đúng 
*/

// for in
function run(object) {
  var array = [];
  for (var key in object) {
    array.push(`Thuộc tính ${key} có giá trị ${object[key]}`);
  }
  return array;
}

// Expected results:
console.log(run({ name: "Nguyen Van A", age: 16 }));
// Output:
// [
//     "Thuộc tính name có giá trị Nguyen Van A",
//     "Thuộc tính age có giá trị 16"
// ]

// for of

var student = {
  class: "12A",
  point: 9,
};

// console.log(Object.keys(student));

//cách 1
// for (var value of Object.keys(student)) {
//   console.log(student[value]);
// }

//cách 2
// for (var value of Object.values(student)) {
//   console.log(value);
// }

//while

var language = ["java", "rust", "c++"];
var ch = 0;
while (ch < language.length) {
  console.log(language[ch]);
  ch++;
}

var isSuccess = false;
do {
  console.log("nap the thanh cong");
} while (!isSuccess);

