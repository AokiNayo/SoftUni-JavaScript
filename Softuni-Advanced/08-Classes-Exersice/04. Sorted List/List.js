class List {
  constructor() {
    this.arrOfNumbers = [];
    this.size = 0;
  }

  add(element) {
    this.arrOfNumbers.push(Number(element));
    this.arrOfNumbers.sort((a, b) => a - b);
    this.size++;
  }
  remove(index) {
    if (index < 0 || this.arrOfNumbers.length - 1 < index) {
      throw new Error('Index out of range.');
    }
    this.arrOfNumbers.splice(index, 1);
    this.arrOfNumbers.sort((a, b) => a - b);
    this.size--;
  }
  get(index) {
    if (index < 0 || this.arrOfNumbers.length - 1 < index) {
      throw new Error('Index out of range.');
    }
    return this.arrOfNumbers[index];
  }
}

let list = new List();
list.add(5);
list.add(6);
list.add(7);
console.log(list.get(1));
list.remove(1);
console.log(list.get(3));
console.log(list.size);
console.log(list);
