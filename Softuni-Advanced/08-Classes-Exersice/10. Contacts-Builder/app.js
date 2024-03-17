class Contact {
  constructor(firstName, lastName, phoneNumber, email) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.phoneNumber = phoneNumber;
    this.email = email;
    this._online = false;
  }
  get online() {
    return this._online;
  }
  set online(value) {
    this._online = value;
    if (this.title) {
      if (this._online) {
        this.title.classList.add("online");
      } else {
        this.title.classList.remove("online");
      }
    }
  }
  render(id) {
    let attachToEl = document.getElementById(id);

    let article = document.createElement("article");
    this.title = document.createElement("div");
    let info = document.createElement("div");
    let phoneNumber = document.createElement("span");
    let email = document.createElement("span");
    let button = document.createElement("button");

    this.title.classList.add("title");
    this.title.textContent = `${this.firstName} ${this.lastName}`;
    this.title.appendChild(button);


    button.innerHTML = "&#8505";
    button.addEventListener("click", () => {
      info.style.display = info.style.display == 'none' ? 'block' : 'none'
    });

    info.classList.add("info");
    info.style.display = "none";
    phoneNumber.innerHTML = `&phone; ${this.phoneNumber}`;
    email.innerHTML = `&#9993; ${this.email}`;

    article.appendChild(this.title);
    article.appendChild(info);
    info.appendChild(phoneNumber);
    info.appendChild(email);

    
    if (this._online) {
      this.title.classList.add("online");
    }

    attachToEl.appendChild(article);
  }
}

let contacts = [
  new Contact("Ivan", "Ivanov", "0888 123 456", "i.ivanov@gmail.com"),
  new Contact("Maria", "Petrova", "0899 987 654", "mar4eto@abv.bg"),
  new Contact("Jordan", "Kirov", "0988 456 789", "jordk@gmail.com"),
];
contacts.forEach((c) => c.render("main"));


// After 1 second, change the online status to true
setTimeout(() => (contacts[1].online = true), 2000);
setTimeout(() => (contacts[0].online = true), 2000);
contacts[2].online = true;
