class FashionRetailInventory {
  constructor(storehouse, location) {
    this.storehouse = storehouse
    this.location = location
    this.productStock = []
  }

  addProduct (productName, size, quantity, price) {

    const currProduct = this.productStock.find(x => x.productName === productName && x.size === size)
    
    if (currProduct) {
      currProduct.quantity += quantity
      return `You added ${quantity} more pieces of product ${productName} size ${size}`
    } 
    this.productStock.push({productName, size, quantity, price})
    return `The product ${productName}, size ${size} was successfully added to the inventory`
  }

  sendProduct (productName, size) {
    const currProduct = this.productStock.find(x => x.productName === productName && x.size === size)

    if (!currProduct) {
      throw new Error(`The product ${productName}, size ${size} is not in the inventory`)
    } 
    this.productStock = this.productStock.filter(x => x.productName != productName || x.size != size);
    return `The product ${productName}, size ${size} was successfully removed from the inventory`
  }

  findProductsBySize(size) {
    let filteredProducts = this.productStock.filter(x => x.size === size)
    
    if(!filteredProducts.length) {
      return `There are no products available in that size`
    } 
    return filteredProducts.map(x => `${x.productName}-${x.quantity} pieces`).join(', ')
  }

  listProducts() {
    if (this.productStock.length === 0) {
      return `${this.storehouse} storehouse is empty`
    }
    
    this.productStock.sort((a, b) => a.productName.localeCompare(b.productName))

    const productInfo = this.productStock.map(x => 
      `${x.productName}/Size:${x.size}/Quantity:${x.quantity}/Price:${x.price}$`
    )
    return `${this.storehouse} storehouse in ${this.location} available products:\n${productInfo.join('\n')}`
  }
}