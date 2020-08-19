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
    return (this, true)
  } else {
    return (this, false)
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
let now = Date.now();

let userDate = new Date(2016, 0, 1, 12, 00);
let birthday = Date.parse(userDate);
let diff = now - birthday;

let quantityMsInYear = 31536000000;
let quantityMsInVisYear = 31622400000;
let averageQuantityMsInYear = 31556952000;

function checkBirthday(birthday) {

  let age = diff / averageQuantityMsInYear;
  if (age >= 18) {
    return 'клиент совершеннолетний';
  } else {
    return 'клиент несовершеннолетний';
  }

}