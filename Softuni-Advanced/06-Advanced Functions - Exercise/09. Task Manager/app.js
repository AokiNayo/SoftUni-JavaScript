function solve() {
  let taskRef = document.querySelector("#task");
  let descriptionRef = document.querySelector("#description");
  let dateRef = document.querySelector("#date");

  let orangeSectionDiv = document.querySelector(".orange").parentElement.nextElementSibling;
  let yellowSectionDiv = document.querySelector(".yellow").parentElement.nextElementSibling;
  let greenSectionDiv = document.querySelector(".green").parentElement.nextElementSibling;

  document.querySelector("#add").addEventListener("click", (e) => {
    e.preventDefault();
    
    if (taskRef.value == '' || descriptionRef.value == '' || dateRef.value == '') {
        return
    }
    
    let article = document.createElement("article");

    let h3Element = document.createElement("h3");
    h3Element.textContent = taskRef.value;

    let descParagraph = document.createElement("p");
    descParagraph.textContent = `Description: ${descriptionRef.value}`

    let dateParagraph = document.createElement("p");
    dateParagraph.textContent = `Due Date: ${dateRef.value}`

    let divElement = document.createElement("div");
    divElement.className = "flex";

    let firstBtn = createBtn('green', 'Start')
    let secondBtn = createBtn('red', 'Delete')

    function createBtn (className, content) {
        let currBtn = document.createElement("button");
        currBtn.className = className
        currBtn.textContent = content
        return currBtn
    }

    article.appendChild(h3Element);
    article.appendChild(descParagraph);
    article.appendChild(dateParagraph);
    article.appendChild(divElement);
    divElement.appendChild(firstBtn)
    divElement.appendChild(secondBtn)
    orangeSectionDiv.appendChild(article)
    
    article.addEventListener('click', (e) => {
        let action = e.target.textContent

        if (action == 'Delete') {
            article.remove()
        } else if (action == 'Start') {
            firstBtn.classList = 'red'
            firstBtn.textContent = 'Delete'
            secondBtn.classList = 'orange'
            secondBtn.textContent = 'Finish'
            yellowSectionDiv.appendChild(article)        
            
        } else if (action == 'Finish') {
            greenSectionDiv.appendChild(article)
            divElement.remove()
        }
    })
  });
}
