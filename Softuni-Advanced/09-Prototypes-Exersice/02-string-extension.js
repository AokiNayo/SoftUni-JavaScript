(function () {
  String.prototype.ensureStart = function (str) {
    return this.startsWith(str) ? this.toString() : str + this;
  };

  String.prototype.ensureEnd = function (str) {
    return this.endsWith(str) ? this.toString() : this + str;
  };

  String.prototype.isEmpty = function () {
    return !this.toString();
  };

  String.prototype.truncate = function (num) {
    if (num < 4) {
      return ".".repeat(num);
    }
    if (this.length <= num) {
      return this.toString();
    }

    let lastSpaceIndex = this.substring(0, num - 2).lastIndexOf(" ");

    if (lastSpaceIndex != -1) {
      return this.substring(0, lastSpaceIndex) + "...";
    } else {
      return this.substring(0, num - 3) + "...";
    }
  };

  String.format = function(string, ...params) {
    let result = string
    for(let i = 0; i < [...params].length; i++) {
      result = result.replace(`{${i}}`, params[i])
    }
    return result
  }
})();

let str = "my string";
str = str.ensureStart("my");
str = str.ensureStart("hello ");
String.format('sometext', 'aoki', 'nayo')
str = str.truncate(16);
str = str.truncate(14);
str = str.truncate(8);
str = str.truncate(4);
str = str.truncate(2);

str = String.format('The {0} {1} fox',
  'quick', 'brown');
str = String.format('jumps {0} {1}',
  'dog');

/*•	truncate(n) – returns the string truncated to n characters by removing words and appends an ellipsis (three periods) to the end. 
If a string is less than n characters long, return the same string. 
If it is longer, split the string where a space occurs and append an ellipsis to it so that the total length is less than or equal to n.
If no space occurs anywhere in the string, return n - 3 characters and an ellipsis. If n is less than 4, return n amount of periods.*/
