console.log("You are at " + window.location);

const body = document.body;
const backgroungColor = prompt('Какой будет фон у страницы?');
body.style.backgroundColor = backgroungColor;
const fontColor = prompt('Какой будет цвет текста на странице?');
const page = document.querySelector('.page');
page.style.fontColor = fontColor;
const personName = prompt('Как зовут человека, который вас вдохновляет');
document.querySelector('span.name').innerHTML = personName;
const imgSrc = prompt('Введите адрес картинки');
document.querySelector('img').src = imgSrc;
const text = prompt('Введите текст страницы');
const shortBio = document.querySelector('p.shortBio');
shortBio.innerHTML = text;
shortBio.className += ' animated';

