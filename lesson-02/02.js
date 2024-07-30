/*
* Напишите код, который симулирует бросок двух шестигранных игральных кубиков и определяет, выпал ли выигрышный дубль.
* В переменные dice1 и dice2 должны присваиваться случайные целые числа от 1 до 6.
* Дубль считается выигрышным, если на обоих дайсах выпало одно и то же число, и это число больше 3.
* Полученное булево значение сохраните в переменной isWinningDouble

* Для успешного прохождения тестов не меняйте названия переменных!
*/

let dice1; // your code
let dice2; // your code
let isWinningDouble = false // your code
let randomNumber;

const randomNumberDice1 = Math.floor(Math.random()*6);
const randomNumberDice2 = Math.floor(Math.random()*6);



switch (randomNumberDice1) {
  case 0: randomNumber = 1
  break;
  case 1: randomNumber = 2
  break;
  case 2: randomNumber = 3
  break;
  case 3: randomNumber = 4
  break;
  case 4: randomNumber = 5
  break;
  case 5: randomNumber = 6
  break;
}


switch (randomNumberDice2) {
  case 0: randomNumber = 1
  break;
  case 1: randomNumber = 2
  break;
  case 2: randomNumber = 3
  break;
  case 3: randomNumber = 4
  break;
  case 4: randomNumber = 5
  break;
  case 5: randomNumber = 6
  break;
}
dice1 = randomNumberDice1;
dice2 = randomNumberDice2;

if (dice1 >= 3 || dice2 >=3) {
  if (dice1 === dice2) {
    isWinningDouble = true;
  } else isWinningDouble = false;
  
}





console.log('Первый бросок: ' + dice1)
console.log('Второй бросок: ' + dice2)
if (isWinningDouble) {
  console.log('Выигрышный дубль!')
} else {
  console.log('Не выигрышный дубль.')
}

