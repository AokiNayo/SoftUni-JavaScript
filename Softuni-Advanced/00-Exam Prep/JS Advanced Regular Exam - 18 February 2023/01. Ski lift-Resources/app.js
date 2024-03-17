window.addEventListener("load", solve);

function solve() {
  const nextBtn = document.querySelector("#next-btn");
  let [firstName, lastName, peopleCount, fromDate, daysCount] = document.querySelectorAll("input");

  let lastTicketValues = {}
  
  nextBtn.addEventListener("click", (e) => {
    e.preventDefault();
    
    if (!firstName.value || !lastName.value || !peopleCount.value || !fromDate.value || !daysCount.value) {
      return;
    }
    
    lastTicketValues.firstName = firstName.value
    lastTicketValues.lastName = lastName.value
    lastTicketValues.peopleCount = peopleCount.value
    lastTicketValues.fromDate = fromDate.value
    lastTicketValues.daysCount = daysCount.value
    
    let editBtn = createElement("button", "Edit", "edit-btn");
    let continueBtn = createElement("button", "Continue", "continue-btn");

    editBtn.addEventListener("click", onEditClick)
    continueBtn.addEventListener("click", onContinueClick)
    // Ticket Info List
    let ticketInfo = document.querySelector(".ticket-info-list");
    let liEl = createElement('li', null, 'ticket');
    
    liEl.appendChild(createFilledArticle());
    liEl.appendChild(editBtn);
    liEl.appendChild(continueBtn);
    ticketInfo.appendChild(liEl);

    document.querySelector('form').reset()
    nextBtn.disabled = true
  });

  function onEditClick() {
    firstName.value = lastTicketValues.firstName
    lastName.value = lastTicketValues.lastName
    peopleCount.value = lastTicketValues.peopleCount
    fromDate.value = lastTicketValues.fromDate
    daysCount.value = lastTicketValues.daysCount

    let previewTicketContainer = document.querySelector(".ticket-info-list")
    previewTicketContainer.textContent = ''
    nextBtn.disabled = false
  }

  function onContinueClick() {
    let previewTicketContainer = document.querySelector(".ticket-info-list")
    let confirmTicketContainer = document.querySelector(".confirm-ticket")
    previewTicketContainer.textContent = ''

    // Create new list element with article
    let article = createFilledArticle()
    let liEl = createElement('li', null, 'ticket-content');

    let confirmBtn = createElement('button', 'Confirm', 'confirm-btn')
    let cancelBtn = createElement('button', 'Cancel', 'cancel-btn')

    confirmBtn.addEventListener('click', () => {
      confirmTicketContainer.textContent = ''
      const mainDiv = document.querySelector('#main')
      const body = document.querySelector('#body')
      mainDiv.remove()
      let h1Element = createElement('h1', 'Thank you, have a nice day!')
      h1Element.id = 'thank-you'
      let backBtn = createElement('button', 'Back')
      backBtn.id = 'back-btn'
      backBtn.addEventListener('click', () => {
        location.reload();
      })
      body.appendChild(h1Element)
      body.appendChild(backBtn)
    })
    cancelBtn.addEventListener('click', () => {
      confirmTicketContainer.textContent = ''
      nextBtn.disabled = false
    })

    liEl.appendChild(article)
    liEl.appendChild(confirmBtn)
    liEl.appendChild(cancelBtn)
    confirmTicketContainer.appendChild(liEl)
  }

  function createElement(type, textContent, className) {
    let currEl = document.createElement(type);

    if (textContent) {
      currEl.textContent = textContent;
    }
    if (className) {
      currEl.className = className
    }
    return currEl;
  }
  function createFilledArticle() {
    let article = createElement("article");
    article.appendChild(createElement("h3", `Name: ${lastTicketValues.firstName} ${lastTicketValues.lastName}`));
    article.appendChild(createElement("p", `From date: ${lastTicketValues.fromDate}`));
    article.appendChild(createElement("p", `For ${lastTicketValues.daysCount} days`));
    article.appendChild(createElement("p", `For ${lastTicketValues.peopleCount} people`));
    return article
  }
}
