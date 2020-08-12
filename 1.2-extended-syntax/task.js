"use strict"

function getResult(a, b, c){
    let x = [];
    let x1;
    let x2;
    //a * x * b + 4 * x - c = 0;
    let D = Math.pow(b, 2) - 4 * a * c;
    
    if (D == 0) {
        x1 = (- b) / 2 * a;
        x = [x1]
    } else if (D > 0) {
        x1 = ((- b) + Math.sqrt(D)) / (2 * a),
        x2 = ((- b) - Math.sqrt(D)) / (2 * a);
        x = [x1, x2]
    }    
        return x;
 }

 // код для задачи №1 писать здесь



 function getAverageMark(marks){
    
    let averageMark 
    if (marks.length == 0) {
        return 0;
    } else if (marks.length > 5) {         
        marks.splice(5);
        console.log ("Колличество оценок больше 5. \n Средняя оценка =")  
    }
    let sum = 0;    
    for (let i = 0; i < marks.length; i++) {
       sum += marks[i];
    }
    averageMark = sum / marks.length;
    console.log(averageMark)
}

let marks = [3, 4, 5, 5, 6, 5]
getAverageMark(marks)
    
 
    // код для задачи №2 писать здесь
    // return averageMark;


    function askDrink(name, dateOfBirthday){
  
        let fullAge = new Date().getFullYear() - new Date(dateOfBirthday).getFullYear();
        if (fullAge >= 18) {
            console.log("Не желаете ли олд-фэшн, " + name + "?")
        } else {console.log("Сожалею, " + name + ", но я не могу вам продать алкоголь. Зато могу предложить вам замечательный клюквенный компот!")
        }
      
        // код для задачи №3 писать здесь
        // return result;
    }
    