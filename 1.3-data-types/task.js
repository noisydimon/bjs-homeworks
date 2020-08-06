"use strict"
function calculateTotalMortgage(percent, contribution, amount, date) {
    if (!Number(percent)) {console.log('Параметр percent содержит неправильное значение ' + percent + '.')}
    if (!Number(contribution)) {console.log('Параметр percent содержит неправильное значение ' + contribution + '.')}
    if (!Number(amount)) {console.log('Параметр percent содержит неправильное значение ' + amount + '.')}
    if (!Date.parse(date)) {console.log('Параметр date содержит неправильное значение ' + date + '.')}

let creditBody = amount - contribution//тело кредита

let d1 = new Date(date);   
let d2 = new Date();
let creditMonths = d1.getMonth() - d2.getMonth()
+ (12 * (d1.getFullYear() - d2.getFullYear()))
//кол-во выплачиваемых месяцев

let P = percent / 100 * 12; 
let monthlyPayment = creditBody * (P + P / ((( 1 + P) ** creditMonths) - 1)) //ежемесячная оплата

let totalAmount = contribution + monthlyPayment * creditMonths //общая сумма

let finalTotalAmount = Math.floor(totalAmount * 100) / 100  //округлить результат

console.log("Ввод: " + percent * 100 + "," + contribution + "," + amount + "," + creditMonths + ". Вывод: " + finalTotalAmount)
}

calculateTotalMortgage(0.05, 2300, 43000, '2021.10.4')


    // код для задачи №1 писать здесь
    // return totalAmount;
}

function getGreeting(name = "Аноним") {

    let greeting = 'Привет, мир! Меня зовут ' + name + '.';
    // код для задачи №2 писать здесь
     return greeting;
}