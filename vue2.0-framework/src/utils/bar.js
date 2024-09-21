const name = "why";
const age = 18;

function sum(a, b) {
  return a + b;
}

class Person {
  constructor(name) {
    this.name = name;
  }
}

//export关键字后面的{}不是一个对象，而是一种语法
export { name, age, sum, Person };