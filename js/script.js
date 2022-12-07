'use strict'
//Массивы в JAVASCRIPT.
// №1
/*
let arr = ['Ваня', 'Иштван', 'Оля',];
let newArr = arr;
newArr.push('Петя');
console.log(arr.length);
*/

//№2
let users = ['Ваня', 'Иштван',];
console.log(users);
users.push('Оля');
console.log(users);
users[1] = 'Петя';
console.log(users);
let removed = users.shift();
console.log(removed);
users.unshift('Маша', 'Паша');
console.log(users);

//№3
let arr = ['Ваня', 'Иштван', 'Оля',];
console.log(arr);
let removedElement = arr.splice(1, 1);
console.log(removedElement);

//№4
let str = 'Ваня,Иштван,Оля';
console.log(str);
console.log(str.split(','));

//Функции в JAVASCRIPT.

//№1
/*
function showName() {
	console.log('Вася'!);
}
setTimeout(showName, 0);
console.log('Коля'!);
*/

//№4
let showMessage;
if (2 > 1) {
	showMessage = function () {
		console.log("Повідомлення");
	}
}
showMessage();


//Document object model (DOM)
//№1

const dataElement = document.querySelector('[data-say-hi]');
console.log(dataElement);
console.log(dataElement.dataset.sayHi);

//№2 
/*
const list = document.querySelector('ul');
const listItem = list.lastElementChild;
console.log(listItem);
*/

//№3
const elem = document.querySelectorAll('.like');
console.log(elem);

//№4
const list = document.querySelectorAll('ul');
list.insertAdjacentHTML(
	'beforeend',
	'<li>Текст</li>'
);


















