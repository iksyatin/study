'use strict';
// --------------------------------------------
let numb =50;

while (numb <= 55) {
    console.log(numb);
    numb++;
}
do {
    console.log(numb);
    numb++;
}
while (numb <= 55);

for (let i = 1; i < 10; i++) {
    if (i == 6) {
        // break;
        continue;
    }
    console.log(i);
    numb++
}



// --------------------------------------------
if (1) {
    console.log('OK');
}else {
    console.log('error');
}

const num = 50;
if (num < 49) {
    console.log('nepravda');
}else if (num > 100){
    console.log('nifiga')
}else {console.log('dadada');
}

// // ()условие ?иф :элс
(num === 50) ? console.log('ok'): console.log('error');

// //проверка переменной на строгое соответсвие(только равно, ни больше ни меньше
switch (num) {
    case 49:
        console.log('неверное');
        break;
    case 100:
        console.log('неа');
        break;
    case 50:
        console.log('даааа');
        break;
    default:
        console.log('что?');
}


let a = +prompt('Введите число от 0 до 10, я его угадаю', 'например 3');
switch (a) {
    case 0:
        alert('Ноль?');
        break;
    case 1:
        alert('1?');
        break;
    case 2:
        alert('2?');
        break;
    case 3:
        alert('3?');
        break;
    case 4:
        alert('4?');
        break;
    case 5:
        alert('5?');
        break;
    case 6:
        alert('6?');
        break;
    case 7:
        alert('7?');
        break;
    case 8:
        alert('8?');
        break;
    case 9:
        alert('9?');
        break;
    case 10:
        alert('10?');
        break;
    default:
        alert('просили же - от 0 до 10!');
}





// --------------------------------------------

console.log('arr' + '-object');
console.log(4 + +'5');

let incr = 10,
    decr = 10;
incr++;
decr--;
console.log(incr);
console.log(decr);

++incr;
--decr;
console.log(incr);
console.log(decr);

console.log(5%2);

console.log((2+2)*2 === +'8');
console.log((2+2)*2 !== '8');
console.log((2+2)*2 !== +'8');


// && это И
// || это или

const isChecked = true,
    isClose = false;
console.log(isChecked || isClose);
console.log(isChecked && !isClose);


--------------------------------------

const category = 'toys';
console.log(`https://someurl.com/${category}/5`);

const user = 'Ivan';
alert(`Привет, ${user} дорогой`);

-------------------------------


// alert('Hello');

const result = confirm('Are you here?');
console.log(result);

const answer = +prompt('Вам есть 18?','18');
console.log((answer + 10));

const answers = [];
answers[0] = prompt('Как ваше имя?', '')
answers[1] = prompt('Как ваше фамилия?', '')
answers[2] = prompt('Сколько вам лет?', '')

document.write(answers);
console.log(typeof(answers));
console.log(typeof(null));
----------------------------------------




let number = 4.6;

console.log(-4/0);
console.log('string' * 9);

const persone = 'Alex';
console.log(persone);

const bool = true;

console.log(something);

let und;
console.log(und);

const obj = {
    name: 'John',
    age: 25,
    isMarried: false
};

console.log(obj.name);
console.log(obj ['name']);

let arr = ['plim.png', 'orange.jpeg', 6, {}, [], 'apple.bmp'];
console.log(arr[1]);
