function findLowestPrices(input) {
  const products = {};

  for (const line of input) {

    const [town, product, price] = line.split(" | ");
    priceNum = Number(price);

    if (!products.hasOwnProperty(product) || priceNum < products[product].price) {
      products[product] = {
        price: priceNum,
        town,
      };
    }
  }

  for (const product in products) {
    console.log(`${product} -> ${products[product].price} (${products[product].town})`);
  }
}

findLowestPrices([
  "Sample Town | Sample Product | 1000",
  "Sample Town | Orange | 2",
  "Sample Town | Peach | 1",
  "Sofia | Orange | 3",
  "Sofia | Peach | 2",
  "New York | Sample Product | 1000.1",
  "New York | Burger | 10",
]);


let input = "Sample Town |   Sample Product | 1000";
let parts = input.split('|').map(part => part.trim());

console.log(parts);