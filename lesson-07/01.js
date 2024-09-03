/*
  Нужно написать функцию capitalizeWords, которая принимает строку и делает так, чтобы каждое слово начиналось с заглавной буквы.
  Например, если передать строку "hello world from javascript", функция должна вернуть "Hello World From JavaScript".

  🧙‍♂️Эту задачу можно решить при помощь цикла for. Рекомендуем реализовать этот вариант решения, как самый эффективный.
  Другой вариант - использовать метод split строк, и метод массива join.
*/

// function capitalizeWords() {
//   return
// }

// function capitalizeWords(str) {
//   let result = ''; // Переменная для хранения результата
//   let shouldCapitalize = true; // Флаг для определения, нужно ли делать букву заглавной

//   for (let i = 0; i < str.length; i++) {
//       const char = str[i];

//       if (shouldCapitalize && char !== ' ') {
//           // Если флаг установлен и текущий символ не пробел, делаем букву заглавной
//           result += char.toUpperCase();
//           shouldCapitalize = false; // Устанавливаем флаг на false
//       } else {
//           result += char; // Добавляем символ в результат
//       }

//       // Если текущий символ пробел, устанавливаем флаг, чтобы следующая буква была заглавной
//       if (char === ' ') {
//           shouldCapitalize = true; 
//       }
//   }

//   return result; // Возвращаем итоговую строку
// }

// // Пример использования
// console.log(capitalizeWords("hello world from javascript")); // "Hello World From Javascript"


// function capitalizeWords(str) {
//   let words = str.split(' '); // Разбиваем строку на массив слов
//   for (let i = 0; i < words.length; i++) {
//       // Делаем первую букву заглавной и оставшуюся часть слова маленькими
//       words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1).toLowerCase(); 
//   }
//   return words.join(' '); // Объединяем слова обратно в строку
// }

// // Пример использования
// console.log(capitalizeWords("hello world from javascript")); // "Hello World From Javascript"




function capitalizeWords(str) {
  // Разбиваем строку на массив слов
  return str.split(' ').map(word => {
      // Преобразуем первое символ в заглавный, а остальные в строчные
      const [firstLetter, ...rest] = word; // Деструктурируем слово
      return firstLetter ? firstLetter.toUpperCase() + rest.join('').toLowerCase() : '';
  }).join(' '); // Объединяем слова обратно в строку
}

// Пример использования
console.log(capitalizeWords("hello world from javascript")); // "Hello World From Javascript"