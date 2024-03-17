function storeCatalogue(arr) {
  let myObj = {};
  for (const el of arr) {
    let [currentProduct, price] = el.split(" : ");
    let firstLetter = currentProduct[0].slice(0, 1);

    if (!myObj.hasOwnProperty(firstLetter)) {
      myObj[firstLetter] = [{ [currentProduct]: Number(price) }];
    } else {
      myObj[firstLetter].push({ [currentProduct]: Number(price) });
    }
  }
  let sortedKeys = Object.keys(myObj).sort();
  for (const key of sortedKeys) {
    console.log(key);
    myObj[key].sort((a, b) => {
      let productNameA = Object.keys(a)[0];
      let productNameB = Object.keys(b)[0];
      return productNameA.localeCompare(productNameB);
    });

    myObj[key].forEach(product => {
      let productName = Object.keys(product)[0];
      let productPrice = product[productName];
      console.log(`  ${productName}: ${productPrice}`);
    });
  }
}

console.log(
  storeCatalogue([
    "Appricot : 20.4",
    "Fridge : 1500",
    "TV : 1499",
    "Deodorant : 10",
    "Boiler : 300",
    "Apple : 1.25",
    "Anti-Bug Spray : 15",
    "T-Shirt : 10",
  ])
);
