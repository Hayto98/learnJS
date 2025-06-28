// var listArray = [
//   [1, 2, 3],
//   [4, 5],
//   [6, 7, 8, 9, 0],
// ];

// //Nest loop

// for (var i = 0; i < listArray.length; i++) {
//   for (var j = 0; j < listArray[i].length; j++) {
//     console.log(listArray[i][j]);
//   }
// }

// var ch = 0;
// for (var i = 0; i <= 100; i += 5) {
//   console.log(ch + i);
// }

// // hàm new Set() : không trùng lặp
// // đề bài: lọc giá trị bị trùng lặp

// arr = ["a", "b", "a", "c", "a", "c", "b", "d", "f", "c", "d"];

// var obj = {};

// var rel = [];

// function loop(start, end, array) {
//   if (start < end) {
//     val = array[start];

//     if (!obj[val]) {
//       obj[val] = val;

//       rel.push(val);
//     }

//     return loop(start + 1, end, array);
//   }

//   return rel;
// }

// loop(0, arr.length, arr);
// console.log(obj);

// console.log(rel);

// nếu dùng loop thì sẽ tốn cpu
// nếu dùng đệ thì sẽ tốn ram

// function programing (tìm hiểu thêm)

//các bước dùng đệ quy

//1. xác định điểm dừng
//2. logic handle => tạo ra điểm dừng

//////////////////////////////////////////////////////////////////////////////////////////////////////////


// Các hàm callback trong Array 
// 1 forEach
// 2 every
// 3 find 
// 4 filter  
// 5 some 

var courses = [
  {
    id: 123,
    nameCourse: "java",
    coin: 12,
  },
  {
    id: 2,
    nameCourse: "rust",
    coin: 60,
  },
  {
    id: 1,
    nameCourse: "c",
    coin: 0,
  },
  {
    id: 3,
    nameCourse: "python",
    coin: 0,
  },
];

//hàm forEach
courses.forEach(function (course) {
  console.log(course); // chạy ra từng phần tử của mảng
});

// hàm every
// chỉ cần 1 phần tử không thỏa là nó trả về false
var ch = courses.every(function (course) {
  return course.coin == 0;
});
console.log(ch);
//nếu tất cả khóa học course = 0 thì nó sẽ trả về true, còn k thì false

//hàm some : ngược lại với every
// tất cả phần tử chỉ cần 1 phần tử thỏa mãn thì trả true

var th = courses.some(function (course) {
  return course.coin == 0;
});
console.log(th);

// hàm find
// nếu tìm thấy có phần tử đó có trong mảng thì nó sẽ trả ra object của phần tử đó
var sh = courses.find(function (course) {
  return course.nameCourse == "rust";
});
// quy tắt hoạt động nó sẽ kiểm tra từng phần tử coi có phần tử nào giống
//với cái đang tìm không, nếu có thì nó trả ra và dừng luôn
// nếu không tìm thấy nó sẽ quăng ra undefined
console.log(sh);

//hàm filter
// nó giống find, nó chỉ khác là nó trả ra nhiều phần tử thỏa mãn với thứ cần tìm

var ah = courses.filter(function (course) {
  return course.coin == 0;
});
console.log(ah); 

//// bài tập 
// const sports = [
//     {
//         name: 'Bóng rổ',
//         like: 6
//     },
//     {
//         name: 'Bơi lội',
//         like: 5
//     },
//     {
//         name: 'Bóng đá',
//         like: 10
//     },
// ]

// function getMostFavoriteSport(sports) {
//     return sports.filter(function(sports) {
//         return sports.like > 5 ;
//     })
// }


// // Kỳ vọng
// console.log(getMostFavoriteSport(sports)) 
// // Output: [{ name: 'Bóng rổ, like: 6 }, { name: 'Bóng đá, like: 10 }]