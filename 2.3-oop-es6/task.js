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
    this.state = this.state * 1.5;
  }
  set state(newState) {
    if (newState < 0) {
      this._state = 0;
    } else if (newState > 100) {
      this._state = 100;
    } else {
      this._state = newState;
    }
  }
  get state() {
    return this._state;
  }

};

class Magazine extends PrintEditionItem {
  constructor(name, releaseDate, pagesCount) {
    super(name, releaseDate, pagesCount)
    this.type = "magazine";
  }
};

class Book extends PrintEditionItem {
  constructor(author, name, releaseDate, pagesCount) {
    super(name, releaseDate, pagesCount)
    this.type = "book";
    this.author = author;
  }
};

class NovelBook extends Book {
  constructor(author, name, releaseDate, pagesCount) {
    super(author, name, releaseDate, pagesCount);
    this.type = "novel";
  }
};

class FantasticBook extends Book {
  constructor(author, name, releaseDate, pagesCount) {
    super(author, name, releaseDate, pagesCount);
    this.type = "fantastic";
  }
};

class DetectiveBook extends Book {
  constructor(author, name, releaseDate, pagesCount) {
    super(author, name, releaseDate, pagesCount);
    this.type = "detectiv";
  }
};

class Library {
  constructor(name, books) {
    this.name = name;
    this.books = [];
  }
  addBook(book) {
    if (book.state > 30) {
      this.books.push(book);
    }
  }
  findBookBy(type, value) {
    for (let i = 0;i < this.books.length;i++) {
      for (let prop in this.books[i]) {
        if (prop === type &&  this.books[i][prop] === value){
          return this.books[i];
        };
      }
    }
    return null;
  }

  giveBookByName(bookName){
    for(let i = 0;i < this.books.length;i++){
      if(this.books[i].name === bookName){
        return this.books.splice([i],1)[0];
      }
    }
    return null;
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
  log.addGrade(23, `math`)*/