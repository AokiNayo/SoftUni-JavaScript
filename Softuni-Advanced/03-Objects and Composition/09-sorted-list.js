function createSortedList() {
  let list = {
    data: [],
    size: 0,

    add: function (num) {
      this.data.push(num);
      this.data.sort((a, b) => a - b);
      this.size = this.data.length;
    },
    remove: function (index) {
      if (index < this.size && index >= 0) {
        this.data.splice(index, 1);
        this.size = this.data.length;
      }
    },
    get: function (index) {
      if (index < this.size && index >= 0) {
        return this.data.find((el, i) => i == index);
      }
    },
  };
  return list;
}

let list = createSortedList();
list.add(5);
list.add(6);
list.add(7);
console.log(list.get(1)); 
list.remove(1);
console.log(list.get(1));
