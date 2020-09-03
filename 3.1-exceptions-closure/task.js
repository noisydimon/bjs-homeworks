function parseCount(string) {
  let result = Number.parseInt(string);
  if (Number.isNaN(result)) {
    const divideError = new Error("Невалидное значение");
    throw divideError;
  }
  return result
}
console.log(parseCount("5"))

function validateCount(string) {
  try {
    parseCount(string)
  } catch (err) {
    return err
  }
  return parseCount(string)
}

validateCount("ikzgf")



//Задание 2

class Triangle {
  constructor(a, b, c) {
    this.a = a;
    this.b = b;
    this.c = c;
    if ((a + b) < c || (a + c) < b || (b + c) < a) {
      const divideError1 = new Error(`Треугольник с такими сторонами ${a}, ${b}, ${c} не существует`);
      throw divideError1
    }
  }




  getPerimeter() {
    return this.a + this.b + this.c;
  }

  getArea() {
    let p = getPerimeter();
    let S = Math.sqrt(p / 2 * (p / 2 - this.a) * (p / 2 - this.b) * (p / 2 - this.c));
    return Math.floor(S * 1000) / 1000;
  }
}

const trin1 = new Triangle(5, 4, 7)
console.log(trin1)


function getTriangle(a, b, c) {
  let newTriangle = {
   getPerimeter: () => "Ошибка! Треугольник не сущесует",    
   getArea : () => "Ошибка! Треугольник не сущесует",
  }

  try {
    const tryTriangle = new Triangle(a, b, c)
  } catch (err) {

    return newTriangle
  }
}

const tri1 = new Triangle(6, 8, 9)



