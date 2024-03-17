class BookClub {
  constructor(library) {
    this.library = library
    this.books = []
    this.members = []
  }
  addBook (title, author) {
    const existingBook = this.books.find(x => x.title == title)

    if (existingBook) {
      return `The book "${title}" by ${author} is already in ${this.library} library.`
    }

    this.books.push({title, author})
    return `The book "${title}" by ${author} has been added to ${this.library} library.`
  }

  addMember (memberName) {
    const existingMember = this.members.find(x => x.name == memberName)

    if (existingMember) {
      return `Member ${memberName} is already a part of the book club.`
    }

    this.members.push({name: memberName})
    return `Member ${memberName} has been joined to the book club.`
  }

  assignBookToMember (memberName, bookTitle) {
    const existingMember = this.members.find(x => x.name == memberName)
    const existingBook = this.books.find(x => x.title == bookTitle)

    if (!existingMember) {
      throw new Error(`Member ${memberName} not found.`)
    }
    if (!existingBook) {
      throw new Error(`Book "${bookTitle}" not found.`)
    }

    this.books = this.books.filter(x => x.title != bookTitle)
    return `Member ${memberName} has been assigned the book "${existingBook.title}" by ${existingBook.author}.`
  }

  generateReadingReport() {
    
    if (!this.members.length) {
      return "No members in the book club."
    }
    if (!this.books.length) {
      return "No available books in the library."
    }

    let output = [`Available Books in ${this.library} library:`]
    this.books.map(x => output.push(`"${x.title}" by ${x.author}`))

    return output.join('\n')
  }
}

const myBookClub = new BookClub('The Bookaholics');
console.log(myBookClub.addBook("To Kill a Mockingbird", "Harper Lee"));
console.log(myBookClub.addBook("To asd a Mockingbird", "Harper Lee"));
console.log(myBookClub.addBook("To asd a asd", "Harper Lee"));
console.log(myBookClub.addBook("1984", "George Orwell"));
console.log(myBookClub.addMember("Alice"));
console.log(myBookClub.addMember("Peter"));
console.log(myBookClub.assignBookToMember("Peter", "1984"));
console.log(myBookClub.assignBookToMember("Alice", "To Kill a Mockingbird"));
console.log(myBookClub.generateReadingReport());
