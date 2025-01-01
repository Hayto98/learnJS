var ch = ["java", "php", "c++", "c#", "c", "javascript"];

//1. toString: này nó sẽ biến cái array thành cái string
console.log(ch.toString()); //java,php,c++,c#,c,javascript

//2. Join: này là ghép cái array đó thành cái string
console.log(ch.join(" - ")); //java - php - c++ - c# - c - javascript

//3. pop: này là xóa element ở cuối
console.log(ch.pop()); //javascript
console.log(ch); //) ['java', 'php', 'c++', 'c#', 'c']

//4. push: thêm item vào cuối
console.log(ch.push("JavaScript")); // 6
console.log(ch); //['java', 'php', 'c++', 'c#', 'c', 'JavaScript']

//5. shift: xóa item đầu tiên
console.log(ch.shift()); // java
console.log(ch); // ['php', 'c++', 'c#', 'c', 'JavaScript']

//6. unshift: thêm item vào đâu danh sách
console.log(ch.unshift("Rust")); //6
console.log(ch); //['Rust', 'php', 'c++', 'c#', 'c', 'JavaScript']

//7. splice(đặt vị trí cần xóa, xóa bao nhiu phần tử)
console.log(ch.splice(1, 2)); // ['php', 'c++']
console.log(ch); //['Rust', 'c#', 'c', 'JavaScript']

//8. concat nối string
var th = "Ruby";
console.log(ch.concat(th)); //['Rust', 'c#', 'c', 'JavaScript', 'Ruby']

//9. slice
console.log(ch.slice(2, 3)); // cắt từ vị trí 2 đến 3
console.log(ch.slice(0)); // sao chép array
console.log(ch.slice(-2, -1)); // lấy từ dưới lên
