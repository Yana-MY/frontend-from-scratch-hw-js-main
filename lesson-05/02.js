/*
Напишите функцию `updateGallery`, которая будет обновлять информацию о произведениях искусства в виртуальной галерее. Функция должна принимать три параметра:

- объект галереи
- название произведения (ключ)
- новое значение

Если произведение с таким названием уже есть в галерее, его значение должно быть обновлено. Если произведения нет, оно должно быть добавлено в объект галерею.

Пример использования функции:

const gallery = {
  'Mona Lisa': 'Leonardo da Vinci',
  'Starry Night': 'Vincent van Gogh',
  'The Scream': 'Edvard Munch'
}

updateGallery(gallery, 'Mona Lisa', 'Leonardo da Vinci, 1503-1506')
updateGallery(gallery, 'The Persistence of Memory', 'Salvador Dali')

console.log(gallery)

Ожидаемый вывод:
{
  'Mona Lisa': 'Leonardo da Vinci, 1503-1506',
  'Starry Night': 'Vincent van Gogh',
  'The Scream': 'Edvard Munch',
  'The Persistence of Memory': 'Salvador Dali'
}
*/

const gallery = {
  'Mona Lisa': 'Leonardo da Vinci',
  'Starry Night': 'Vincent van Gogh',
  'The Scream': 'Edvard Munch',
}

function updateGallery(gallery, artworkTitle, newValue) {
  let found = false;

  // Проходимся по объекту с помощью цикла for...in
  for (let title in gallery) {
      if (title === artworkTitle) {
          // Если найдено произведение, обновляем его значение
          gallery[artworkTitle] = newValue;
          found = true;
          break;
      }
  }

  // Если произведение не найдено, добавляем его в галерею
  if (!found) {
      gallery[artworkTitle] = newValue;
  }
}

// // Пример использования функции
// const gallery = {
//   'Mona Lisa': 'Leonardo da Vinci',
//   'Starry Night': 'Vincent van Gogh',
//   'The Scream': 'Edvard Munch'
// };

// Обновляем произведение "Mona Lisa"
updateGallery(gallery, 'Mona Lisa', 'Leonardo da Vinci, 1503-1506');
// Добавляем новое произведение "The Persistence of Memory"
updateGallery(gallery, 'The Persistence of Memory', 'Salvador Dali');

// Выводим обновленную галерею в консоль
console.log(gallery);
// Ожидаемый вывод:
// javascript
// Копировать
// {
// 'Mona Lisa': 'Leonardo da Vinci, 1503-1506',
// 'Starry Night': 'Vincent van Gogh',
// 'The Scream': 'Edvard Munch',
// 'The Persistence of Memory': 'Salvador Dali'
// }