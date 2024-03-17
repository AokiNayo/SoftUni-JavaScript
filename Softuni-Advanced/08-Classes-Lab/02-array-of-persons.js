function arrayOfPersons() {
  class Person {
    constructor(firstName, lastName, age, email){
      this.firstName = firstName
      this.lastName = lastName
      this.age = age
      this.email = email
    }
  
    toString = function() {
      return `${this.firstName} ${this.lastName} (age: ${this.age}, email: ${this.email})`
    }
  }
  let arrOfPersons = []
  arrOfPersons.push(new Person('Anna', 'Simpson', 22, 'anna@yahoo.com'))
  arrOfPersons.push(new Person('SoftUni'))
  arrOfPersons.push(new Person('Stephan', 'Johnson', 25))
  arrOfPersons.push(new Person('Gabriel', 'Peterson', 24, 'g.p@gmail.com'))

  return arrOfPersons
}

console.log(arrayOfPersons())