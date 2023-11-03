"use strict";

/*
###Задание 2
Вы разрабатываете систему отзывов для вашего веб-сайта. Пользователи могут 
оставлять отзывы, но чтобы исключить слишком короткие или слишком длинные 
сообщения, вы решаете установить ограничение, отзыв должен быть не менее 50 
символов в длину и не более 500. В случае неверной длины, необходимо выводить 
сообщение об ошибке, рядом с полем для ввода.

Создайте HTML-структуру. 
На странице должны отображаться товары, под каждым товаром должен быть список 
отзывов на данный товар. Под каждым списком отзывов должна быть форма, где можно
добавить отзыв для продукта.

При добавлении отзыва, он должен отображаться на странице под предыдущими 
отзывами, а не заменять их.
Массив initialData должен использоваться для начальной загрузки данных 
при запуске вашего приложения.

Каждый отзыв должен иметь уникальное числовое id.

ВНИМАНИЕ! Если вы не проходили на курсе работу с DOM, то можно это задание не 
делать, пока рано.
*/

const initialData = [
  {
    product: "Apple iPhone 13",
    reviews: [
      {
        id: 1,
        text: "Отличный телефон! Батарея держится долго.",
      },
      {
        id: 2,
        text: "Камера супер, фото выглядят просто потрясающе.",
      },
    ],
  },
  {
    product: "Samsung Galaxy Z Fold 3",
    reviews: [
      {
        id: 3,
        text: "Интересный дизайн, но дорогой.",
      },
    ],
  },
  {
    product: "Sony PlayStation 5",
    reviews: [
      {
        id: 4,
        text: "Люблю играть на PS5, графика на высоте.",
      },
    ],
  },
];

const listOfProductEl = document.querySelector(".listOfProduct");
let count = 0;
for (const item of initialData) {
  const addNameEl = document.createElement("h2");
  addNameEl.textContent = `${item["product"]}`;
  listOfProductEl.append(addNameEl);
  console.log(item["product"]);

  for (let index = 0; index < item.reviews.length; index++) {
    console.log(item.reviews[index]["text"]);
    const addReviewEl = document.createElement("p");
    addReviewEl.textContent = `${item.reviews[index]["text"]}`;
    addNameEl.after(addReviewEl);
  }

  const buttonEl = document.createElement("button");
  buttonEl.id = `${count}`;

  buttonEl.textContent = "Добавить";
  addNameEl.after(buttonEl);
  const inputEl = document.createElement("input");
  inputEl.id = `inp${count}`;
  inputEl.style.width = "350px";
  inputEl.setAttribute("placeholder", "Оставить отзыв");
  addNameEl.after(inputEl);
  count++;
}

let countId = 5;
const btnEls = document.querySelectorAll("button");
for (let index = 0; index < btnEls.length; index++) {
  btnEls[index].addEventListener("click", (event) => {
    const inputField = document.getElementById(`inp${event.target.id}`);

    if (inputField.value.length < 50 || inputField.value.length > 500) {
      throw new Error(
        "отзыв должен быть не менее 50 символов в длину и не более 500!"
      );
    }
    const newRevew = {
      id: countId++,
      text: inputField.value,
    };
    initialData[event.target.id]["reviews"].push(newRevew);
    const btnEll = document.getElementById(`${event.target.id}`);
    const newRevewEl = document.createElement("p");
    newRevewEl.textContent = `${inputField.value}`;
    btnEll.after(newRevewEl);
    inputField.value = "";
  });
}
