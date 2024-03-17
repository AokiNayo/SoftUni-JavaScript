function heroicInventory(arr) {

  let heroCollection = [];

  for (const el of arr) {
    let currentHero = el.split(" / ");
    let hero = {
      name: currentHero[0],
      level: Number(currentHero[1]),
      items: [],
    };

    if (typeof(currentHero[2]) != "undefined") {
      let heroItems = currentHero[2].split(", ");

      for (const item of heroItems) {
        hero.items.push(item);
      }
    }
    heroCollection.push(hero);
  }

  return JSON.stringify(heroCollection);
}

console.log(
  heroicInventory([
    "Isacc / 25 / Apple, GravityGun",
    "Derek / 12 / BarrelVest, DestructionSword",
    "Hes / 1 /",
  ])
);
