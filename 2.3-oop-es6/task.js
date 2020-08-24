"use strict"
//Задача 1
class PrintEditionItem {
  constructor(name, releaseDate, pagesCount) {
    this.name = name;
    this.releaseDate = releaseDate;
    this.pagesCount = pagesCount;
    this.state = 100;
    this.type = null;
  }
  fix() {
    return this.state * 1.5
  };

  set (state) {
    if (this.state < 0) {
      state = 0
    } else if (this.state > 100) {
      state = 100
    } else {
      state = state
    }
  }
  get() {
    return _state
  }
}


class magazine extends PrintEditionItem {
  constructor() {
    this.type = "magazine";
  }
}

class book extends PrintEditionItem {
  constructor(author, name, releaseDate, pagesCount) {
    super(name, releaseDate, pagesCount)
    this.type = "book";
    this.author = author;
  }
}

class NovelBook extends book {
  constructor() {
    this.type = "novel";
  }
}

class FantasticBook extends book {
  constructor(author, name, releaseDate, pagesCount) {
    super(author, name, releaseDate, pagesCount)
    this.type = "fantastic";
  }
}

class DetectiveBook extends book {
  constructor() {
    this.type = "detective";
  }
}

const picknick = new FantasticBook("Аркадий и Борис Стругацкие", "Пикник на обочине", 1972, 168);


console.log(picknick.author); //"Аркадий и Борис Стругацкие"

picknick.state = 10;
console.log(picknick.state); //10

picknick.fix();
console.log(picknick.state); //15



//Задача 2

class Library {
  constructor (libraryName, books) {
  this.libraryName = libraryName;
  this.books = [];
  }
  addbook(book){
    if(this.book.state > 30) {
      this.books.push(book.bookName);
    }
  }
  
  findBookBy(type, value) {
  for (let i = 0; i < this.books.length; i++) {
    for (let prop in this.books[i]) {
      if (prop ===type && this.books[i]) {        
          return this.books[i].name;
        } else {
          return null
          };
      }
    }
  }
   giveBookByName(bookName){
    for (let i = 0; i < this.books.length; i++){
      if (this.books[i].name === bookName){
        this.books.splice([i],1);
        console.log(`Удаленная книга  ${bookName} ${this.books[i]}`);
        return this.books[i];
      } else {
        return null
        };
      }
   }
}


  //Задача 3

  /*class StudentLog {
    constructor(studentName) {
      this.studentName = studentName;
  }
  
  getName(){
    return this.studentName
  }
  addGrade(grade, subject){
    if (grade !== 1 || 2 || 3 || 4 || 5) {
      return `Вы пытались поставить оценку ${grade} по предмету ${subject}. Допускаются только числа от 1 до 5.`
    }
  }
  }
  

  //Проверки
  const log = new StudentLog('Олег Никифоров');
  console.log(log)
  
  log.getName()
  log.addGrade(23, `math`)