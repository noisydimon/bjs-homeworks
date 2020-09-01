function parseCount(string) {
  let result = Number.parseInt(string)
  if(result === NaN) {
    throw "Невалидное значение"
  } else {
  return result
}
}
console.log(parseCount("5"))

function validateCount(string) {
  try{parseCount(string)}catch(err){return err
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
    if((this.a + this.b) < this.c || (this.a + this.c) < this.b || (this.b + this.c) < this.a) {
      throw `Треугольник с такими сторонами ${a}, ${b}, ${c} не существует`
      }
    }
  
   
     
     
    getPerimeter(){
      let perimeter = a + b + c;
      return perimetr
    }  
   
    getArea() {
      let p = getPerimeter();
      let S = Math.sqrt(p/2 * (p/2 - a) * (p/2 - b) * (p/2 - c));
      return Math.floor(S * 1000) / 1000;
    }
}

const trin1 = new Triangle(5, 4, 7)
console.log(trin1)


function getTriangle(a, b, c){
  let newTriangle = {
    getPerimeter(){
      return "Ошибка! Треугольник не существует"
    },
     getArea(){
      return "Ошибка! Треугольник не существует"
    },
  }
  try{Triangle.constructor}catch(err){
    
    return newTriangle
  }
}

const tri1 = new Triangle(6, 8, 18)
console.log(tri1.checkTriangle())


