"use strict"
//Задание 1
function getSolutions(a, b, c){
    //a * x * b + 4 * x - c = 0;
    let D = Math.pow(b, 2) - 4 * a * c;
    let roots = [];
    let result = {
        D: D,
        roots: roots
    }
    
    if (D < 0) {
        result.D = D;
        result.roots = []
     } else if (D == 0) {
        let x1 = (- b) / 2 * a; 
        result.D = D;
        result.roots = [x1]
     } else {
        let x1 = ((- b) + Math.sqrt(Math.pow(b, 2) - 4 * a * c)) / (2 * a);
        let x2 = ((- b) - Math.sqrt(Math.pow(b, 2) + 4 * a * c)) / (2 * a); 
        result.D = D;
        result.roots = [x1, x2]
    }    
      return result;
     }
     getSolutions(1, 2, 3)
    
     function showSolutionsMessage( a, b, c ){
             let result = getSolutions(a, b, c)
             console.log(`Вычисляем корни квадратного уравнения ${a}x² + ${b}x + ${c}.`);
             console.log(`Значение дискриминанта: ${result.D}`);
             if(result.D < 0) {
                 console.log(`Уравнение не имеет вещественных корней`)
             } else if(result.D == 0) {
                 console.log(`Уравнение имеет один корень X₁ = ${result.roots}`)
             } else {
                 console.log(`Уравнение имеет два корня. X₁ = ${result.roots[0]}, X₂ = ${result.roots[1]}`)
             }
         }
         showSolutionsMessage(2, 4, 2)









         let algebra = [3, 4, 5, 3, 4];
         let geometry = [4, 5, 2, 4];
         let russian = [3, 4];
         let physics = [3, 4, 4];
         let music = [3, 4, 5, 3, 4];
         let english = [3, 4, 2, 4, 4];
         let poetry = [3, 3, 5, 4];
         let chemistry = [3, 2, 3, 4, 4];
         let french = [3, 4, 5, 3, 4, 5];
         
         let data = {
           algebra: algebra,
           geometry: geometry,
           russian: russian,
           physics: physics,
           music: music,
           english: english,
           poetry: poetry,
           chemistry: chemistry,
           french: french
         }
         
         function getAverageMark(marks) {
           if (marks.length == 0) {
             return 0
           } else {
             let sum = 0;
             for (let i = 0; i < marks.length; i++) {
               sum += marks[i];
             }
             return sum / marks.length
           }
         
         }
         
         function getAverageScore(data) {
           let result = {};
           for(key in data) {
             result[key] = getAverageMark(data[key])
             result.average = getAverageMark(Object.values(result))
           }
           return result
         }
         
         



         function getPersonData(secretData) { 
            let person = {
              firstName: getDecodedValue(secretData.aaa),
              lastName: getDecodedValue(secretData.bbb)
            }
          
            
          return person
          }
          
          
          function getDecodedValue(secret) {
          if (secret == 1) {
            return "Эмильо"
          } else if (secret == 0) {
            return "Родриго"
          }
          }
          
          /*
          let secretData = {
            firstName: "Эмильо",
            lastName: "Родриго"
          }
          */
          
          console.log(getPersonData({
            aaa: 0,
            bbb: 0
          }))
