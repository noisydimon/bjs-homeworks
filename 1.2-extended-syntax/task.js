"use strict"

function getResult(a, b, c){
    let x;
    let x1;
    let x2;
    //a * x * b + 4 * x - c = 0;
    let D = Math.pow(b, 2) - 4 * a * c;
    
     if (D < 0) { x = []
 } else if (D == 0) {x1 = (- b) / 2 * a; x = [x1]
 } else {x1 = ((- b) + Math.sqrt(Math.pow(b, 2) - 4 * a * c)) / (2 * a),
 x2 = ((- b) - Math.sqrt(Math.pow(b, 2) + 4 * a * c)) / (2 * a); x = [x1, x2] }    // 
  return x;
 }
 getResult(2, 10, 1)
 // код для задачи №1 писать здесь


 let marks
function getAverageMark(marks){
  
    let averageMark 
    if (marks.length == 0) {
        return 0;
    } else if (marks.length > 5) { 
        
        marks.splice(5, marks.length - 5)
        averageMark = (marks[0] + marks[1] + marks[2] + marks[3] + marks[4]) / 5;
        console.log("Колличество оценок больше 5. \n Средняя оценка = " + averageMark + ".");
    } else if (marks.length <= 5) {
        let sum = 0    
        for (let i = 0; i < marks.length; i++) {
        sum += marks[i];
        }
        averageMark = sum / marks.length
        console.log(averageMark)        
    }
}

    getAverageMark([4, 4]);


    // код для задачи №2 писать здесь
    // return averageMark;


function askDrink(name, dateOfBirthday){
    let dateNow = new Date()
    let dateName = new Date(dateOfBirthday)
    let fullAge = dateNow.getFullYear() - dateName.getFullYear();
    if (fullAge >= 18) {
        console.log("Не желаете ли олд-фэшн, " + name + "?")
    } else {console.log("Сожалею, " + name + ", но я не могу вам продать алкоголь. Зато могу предложить вам замечательный клюквенный компот!")
    }



    // код для задачи №3 писать здесь
    // return result;
}
askDrink('Sereja', '1996.05.04')