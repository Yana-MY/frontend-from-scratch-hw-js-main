/*
Реализовать метод `addResource`, который будет добавлять указанное количество ресурсов к уже существующим ресурсам в объекте `game`.

Требования к методу:

1. Метод должен принимать два параметра:
  - `resource` (строка) — тип ресурса (`gold`, `lumber` и т.д.).
  - `amount` (число) — количество ресурса, которое нужно добавить.
2. Если тип ресурса не существует в объекте `game.resources`, метод должен выводить в консоль сообщение "Invalid resource".
3. Если ресурс существует, метод должен добавлять значение `amount` к текущему количеству этого ресурса в объекте.
*/

// const game = {
//   resources: {
//     gold: 250,
//     lumber: 100,
//   },
//   addResource() {}
// }

const game = {
  resources: {
    gold: 250,
    lumber: 100,
  },
  addResource(resource, amount) {
    let resourceExists = false;
    
    for (let key in this.resources) {
      if (key === resource) {
        this.resources[key] += amount;
        resourceExists = true;
        break;
      }
    }
    
    if (!resourceExists) {
      console.log("Invalid resource");
    }
  }
}

// Примеры использования:
game.addResource("gold", 50);
console.log(game.resources.gold); // Должно вывести: 300

game.addResource("lumber", 40);
console.log(game.resources.lumber); // Должно вывести: 140

game.addResource("food", 30); // Должно вывести: "Invalid resource"
console.log(game.resources.food); // Должно вывести: undefined