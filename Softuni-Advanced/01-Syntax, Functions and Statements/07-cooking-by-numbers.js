//
//
//

function cookingByNumbers(...args) {
  let num = Number(args[0]);

  for (const el of args) {
    switch (el) {
      case "chop":
        num /= 2;
        console.log(num);
        break;
      case "dice":
        num = Math.sqrt(num)
        console.log(num);
        break;
      case "spice":
        num++
        console.log(num);
        break;
      case "bake":
        num *= 3;
        console.log(num);
        break;
      case "fillet":
        num = num - (num * 0.20)
        console.log(num);
        break;

      default:
        break;
    }
  }
}

cookingByNumbers('32','chop','chop','chop','chop','chop')
console.log('---');
cookingByNumbers('9', 'dice', 'spice', 'chop', 'bake', 'fillet')
