function juiceFlavours(data) {
  let juiceMap = new Map();
  let bottles = new Map();

  for (const entry of data) {
    let [fruit, quantity] = entry.split(" => ");

    if (juiceMap.has(fruit)) {
      let existingValue = juiceMap.get(fruit);
      juiceMap.set(fruit, existingValue + Number(quantity));
    } else {
      juiceMap.set(fruit, Number(quantity));
    }
    if (juiceMap.get(fruit) >= 1000) {
      let newValue = juiceMap.get(fruit) % 1000;
      let bottleOfJuice = Math.floor(juiceMap.get(fruit) / 1000);
      juiceMap.set(fruit, newValue);

      if (bottles.has(fruit)) {
        bottles.set(fruit, bottles.get(fruit) + bottleOfJuice);
      } else {
        bottles.set(fruit, bottleOfJuice);
      }
    }
  }

  for (const [key, value] of bottles) {
    console.log(`${key} => ${value}`);
  }
}

// ------------------------------

function juiceFlavours(data) {
  const juiceMap = {};
  const bottles = {};

  data.forEach(entry => {
    const [fruit, quantityStr] = entry.split(" => ");
    const quantity = Number(quantityStr);

    juiceMap[fruit] = (juiceMap[fruit] || 0) + quantity;

    if (juiceMap[fruit] >= 1000) {
      const remainingJuice = juiceMap[fruit] % 1000;
      const bottlesCount = Math.floor(juiceMap[fruit] / 1000);

      juiceMap[fruit] = remainingJuice;
      bottles[fruit] = (bottles[fruit] || 0) + bottlesCount;
    }
  });

  for (const fruit in bottles) {
    if (bottles.hasOwnProperty(fruit)) {
      console.log(`${fruit} => ${bottles[fruit]}`);
    }
  }
}

juiceFlavours([
  "Kiwi => 234",
  "Pear => 2345",
  "Watermelon => 3456",
  "Kiwi => 4567",
  "Pear => 5678",
  "Watermelon => 6789",
]);
