"use strict";

/*
###Задание 1
Необходимо создать класс Library. Конструктор класса, должен принимать начальный 
список книг (массив) в качестве аргумента. Убедитесь, что предоставленный массив 
не содержит дубликатов; в противном случае необходимо выбросить ошибку.
1. Класс должен содержать приватное свойство #books, которое должно хранить 
книги, переданные при создании объекта.
2. Реализуйте геттер-функцию allBooks, которая возвращает текущий список книг.
3. Реализуйте метод addBook(title), который позволяет добавлять книгу в список. 
Если книга с таким названием уже существует в списке, выбросьте ошибку с 
соответствующим сообщением.
4. Реализуйте метод removeBook(title), который позволит удалять книгу из списка 
по названию. Если книги с таким названием нет в списке, выбросьте ошибку с 
соответствующим сообщением.
5. Реализуйте метод hasBook(title), который будет проверять наличие книги в 
библиотеке и возвращать true или false в зависимости от того, есть ли такая 
книга в списке или нет.
*/

class Library {
  #books = [];
  constructor(bookList) {
    const bookSet = new Set(bookList);
    if (bookList.length !== bookSet.size) {
      throw new Error("названия книг повторяются");
    }
    for (let index = 0; index < bookList.length; index++) {
      this.#books.push(bookList[index]);
    }
  }

  get allBooks() {
    return this.#books;
  }

  addBook(title) {
    for (const book of this.#books) {
      if (book === title) {
        throw new Error("Такая книга уже есть!");
      }
    }
    this.#books.push(title);
  }
  removeBook(title) {
    if (this.hasBook(title)) {
      this.#books.splice(this.#books.indexOf(title), 1);
    } else {
      throw new Error("Такой книги нет!");
    }
  }
  hasBook(title) {
    return this.#books.includes(title);
  }
}
const bookArray = ["Чебурашка", "Противостояние", "Фиксики"];

const library1 = new Library(bookArray);
console.log('Список книг');
console.log(library1.allBooks);
console.log('Добавили книгу Фиксики2');
library1.addBook("Фиксики2");
console.log(library1.allBooks);
console.log('удалили "Противостояние"');
library1.removeBook("Противостояние");
console.log(library1.allBooks);

console.log(library1.hasBook("Чебурашка"));
