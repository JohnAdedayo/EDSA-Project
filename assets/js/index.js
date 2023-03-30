/*class Book {
  constructor(author, title, pages, edition, isPublished) {
    this.author = author;
    this.title = title;
    this.pages = pages;
    this.edition = edition;
    this.isPublished = true;
  }
   catalogue() {
    if (this.isPublished == true) {
      alert(
        `This is published with the name ${this.author}, and the title is ${this.title}, it has ${this.pages} pages, and the edition is ${this.edition}`);

    } else {
      alert(
        `This book is not published and cannot be catalogued in our library`)
    };
  }
}


let toBeCatalogue = new Book(
  " Samson Olusegun",
  " Learning Javascript",
  "23",
  "2021"
);
toBeCatalogue.catalogue();


class Journal extends Book {
  constructor(author, title, pages, edition, isPublished, publication) {
    super();
    this.author = author;
    this.title = title;
    this.pages = pages;
    this.edition = edition;
    this.isPublished = true;
    this.publication = publication;
  }

  journalPublication() {
    if (this.isPublished == true) {
      alert(`This journal is published under the name ${this.publication}`);
    } else {
      alert(`This journal is not published`);
    }
  }
}
let journalPublication = new Journal("", "", "", "", "","Olaide Otitoju Publication");
journalPublication.journalPublication();*/




/*function Clock({ template }) {
  this.template = template;
  this.timer;
}
Clock.prototype.render = function () {
  let date = new Date()

  let hours = date.getHours();
  if (hours < 10) minutes = "0" + hours;

  let minutes = date.getMinutes();
  if (minutes < 10) minutes = "0" + minutes;

  let seconds = date.getSeconds();
  if (seconds < 10) seconds = "0" + seconds;

  let output = this.template
    .replace('h', hours)
    .replace('m', minutes)
    .replace('s', seconds);

  console.log(output);

};

Clock.prototype.start = function () {
  this.render();
  this.timer = setInterval(() => this.render(), 1000);
};
let clock = new Clock({ template: "h:m:s" });
clock.start();*/



let fruits = ("Orange" "Apple" "Mango");
fruits.shift()
console.log(fruits)









