class WineSelection {
  constructor(space) {
    this.space = Number(space);
    this.wines = [];
    this.bill = 0;
  }

  reserveABottle(wineName, wineType, price) {
    let newWine = {
      wineName: wineName,
      wineType: wineType,
      winePrice: Number(price),
      paid: false,
    };

    if (this.space - 1 < 0) {
      throw new Error("Not enough space in the cellar.");
    }
    this.wines.push(newWine);
    this.space = this.space - 1;
    return `You reserved a bottle of ${wineName} ${wineType} wine.`;
  }
  payWineBottle(wineName, price) {
    let currentWine = this.wines.find((x) => x.wineName == wineName);
    if (!currentWine) {
      throw new Error(`${wineName} is not in the cellar.`);
    }
    if (currentWine.paid == true) {
      throw new Error(`${wineName} has already been paid.`);
    }
    currentWine.paid = true;
    this.bill += price;
    return `You bought a ${wineName} for a ${price}$.`;
  }
  openBottle(wineName) {
    let currentWine = this.wines.find((x) => x.wineName == wineName);

    if (!currentWine) {
      throw new Error("The wine, you're looking for, is not found.")
    }
    if (currentWine.paid == false) {
      throw new Error(`${wineName} need to be paid before open the bottle.`)
    }
    this.wines = this.wines.filter(x => x.wineName != wineName)
    return `You drank a bottle of ${wineName}.`
  }
  cellarRevision(wineType) {
    let output = ''

    if (!wineType) {
      output = `You have space for ${this.space} bottles more.\nYou paid ${this.bill}$ for the wine.\n`
                
      let sortedWines = this.wines.sort((a,b) => a.wineName.localeCompare(b.wineName))

      for (const currentWine of sortedWines) {
        output += `${currentWine.wineName} > ${currentWine.wineType} - ${currentWine.paid ? 'Has Paid.' : 'Not Paid.'}\n`
      } 
    } else {
          
      let winesThatMatch = this.wines.filter(x => x.wineType == wineType)

      if (winesThatMatch.length == 0) {
        throw new Error(`There is no ${wineType} in the cellar.`)
      }

      winesThatMatch.sort((a,b) => a.wineName.localeCompare(b.wineName))

      for (const currentWine of winesThatMatch) {
        output += `${currentWine.wineName} > ${currentWine.wineType} - ${currentWine.paid ? 'Has Paid.' : 'Not Paid.'}\n`
      } 
    }

    return output.trim()
  }
}

const selection = new WineSelection(3)
console.log(selection.reserveABottle('Sauvignon Blanc Marlborough', 'Rose', 151)); 
console.log(selection.reserveABottle('Bodegas Godelia Mencía', 'Rose', 144)); 
console.log(selection.reserveABottle('Cabernet Sauvignon Napa Valley', 'Rose', 151)); 
console.log(selection.cellarRevision('Rose'));

