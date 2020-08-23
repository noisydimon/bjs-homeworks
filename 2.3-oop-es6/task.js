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
