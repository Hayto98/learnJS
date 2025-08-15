function Animal(name, age) {
  this.name = name;
  this.age = age;
}
Animal.prototype.soud = function () {
  return "kêu: ";
};

function Cat(name, age) {
  Animal.call(this, name, age);
  this.keu = function keu() {
    console.log("meo meo");
  };
}

Cat.prototype = Object.create(Animal.prototype);
Cat.constructor = Cat;

function Dog(name, age) {
  Animal.call(this, name, age);
  this.keu = function keu() {
    const speak = Animal.prototype.soud.call(this);
    console.log(` ${speak} gau gau`); //kêu:  gau gau
  };
}

Dog.prototype = Object.create(Animal.prototype);
Dog.constructor = Dog;

let tom = new Cat("Tom", 1);
let jerry = new Dog("Quang", 2);

console.log(tom);
console.log(jerry);

tom.soud(); // kêu

Animal.prototype.keu = function () {
  console.log("ahihi");
};

jerry.keu(); //gau gau vì nó override
// nếu muốn dùng phương thức trong Animal thì sao ?
// this.keu = function keu() {
//   const speak = Animal.prototype.soud.call(this);
//   console.log(` ${speak} gau gau`); //kêu:  gau gau       <= trong Dog
// };
