'use strict'
//Задание 1
String.prototype.isPalindrome = function () {
  let arrayStr = this.toUpperCase().split('');
  for (var i = arrayStr.length - 1; i >= 0; i--) {
    if (arrayStr[i] === ' ') {
      arrayStr.splice(i, 1);
    }
  }

  if (arrayStr.join('') == arrayStr.reverse('').join('')) {
    return (true)
  } else {
    return (false)
  }
}




//Задание 2

function getAverageMark(marks) {
  let sum = 0;
  for (let i = 0; i < marks.length; i++) {
    sum += marks[i];
  }
  let roundedAverage = Math.round(sum / marks.length)
  return roundedAverage
}

let marks = [3, 4, 5, 3, 2];

getAverageMark(marks)





//Задание 3

function checkBirthday(userDate) {
  let now = Date.now();
  console.log(now)
  
  let birthday = Date.parse(userDate);
  console.log(birthday)
  let diff = now - birthday;
  console.log(diff)
  
  let quantityMsInYear = 31536000000;
  let quantityMsInVisYear = 31622400000;
  let averageQuantityMsInYear = 31556952000;
  
  
    let age = diff / averageQuantityMsInYear;
    console.log(age)
  
    return age >= 18
  }

//let birthday = Date.parse(userDate);