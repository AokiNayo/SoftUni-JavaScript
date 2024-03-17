function solution() {
  const mealRecipe = {
    apple: { carbohydrate: 1, flavour: 2 },
    lemonade: { carbohydrate: 10, flavour: 20 },
    burger: { carbohydrate: 5, fat: 7, flavour: 3 },
    eggs: { protein: 5, fat: 1, flavour: 1 },
    turkey: { protein: 10, carbohydrate: 10, fat: 10, flavour: 10 },
  };
  const warehouse = {
    protein: 0,
    carbohydrate: 0,
    fat: 0,
    flavour: 0,
  };
  function robot(input) {
    let [command, ...args] = input.split(" ");
    
    let robotActions = {
      restock: function (microelement, qnty) {
        warehouse[microelement] += Number(qnty);
        return "Success";
      },
      prepare: function (recipe, qnty) {
        let isEnough = true;
        let recipeProducts = mealRecipe[recipe];
        let notEnoughProduct = "";

        for (const curr in recipeProducts) {
          if (warehouse[curr] < recipeProducts[curr] * qnty) {
            isEnough = false;
            notEnoughProduct = curr;
            break;
          }
        }
        if (!isEnough) {
          return `Error: not enough ${notEnoughProduct} in stock`;
        } else {
          for (const curr in recipeProducts) {
            warehouse[curr] -= recipeProducts[curr] * qnty;
          }
          return "Success";
        }
      },
      report: function () {
          return `protein=${warehouse.protein} carbohydrate=${warehouse.carbohydrate} fat=${warehouse.fat} flavour=${warehouse.flavour}`
      },
    };
    return robotActions[command](...args);
  }
  return robot;
}
let manager = solution();

var expectationPairs = [
  'prepare turkey 1', // Error: not enough protein in stock
  'restock protein 10', // Success
  'prepare turkey 1', // Error: not enough carbohydrate in stock
  'restock carbohydrate 10', // Success
  'prepare turkey 1', //  'Error: not enough fat in stock'
  'restock fat 10', // Success
  'prepare turkey 1', // Error: not enough flavour in stock
  'restock flavour 10', // Success
  'prepare turkey 1', // Success
  'report' // protein=0 carbohydrate=0 fat=0 flavour=0'
];
for (const el of expectationPairs) {
  
  console.log(manager(el))
}