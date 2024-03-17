function validate() {
  const allFields = Array.from(document.querySelectorAll('input'))
  const validMsgStyleRef = document.querySelector('#valid').style
  const submitBtn = document.querySelector("#submit");

  const [usernameRef, emailRef, passRef, confPassRef] = allFields
  const [companyCheckbox, companyField] = allFields.splice(4)

  const usernameRegex = /^[A-Za-zZ0-9]{3,20}$/gm
  const emailRegex = /.*@.*\..*/;
  const passRegex = /^[\w]{5,15}$/gm

  companyCheckbox.addEventListener("change", () => {
    const companyInfoStyleRef = document.querySelector("#companyInfo").style
    companyCheckbox.checked ? companyInfoStyleRef.display = "block" : companyInfoStyleRef.display = "none"
  });

  submitBtn.addEventListener("click", (e) => {
    e.preventDefault();
    usernameRef.value.match(usernameRegex) ? removeErrorStyle(usernameRef) : applyErrorStyle(usernameRef)
    emailRef.value.match(emailRegex) ? removeErrorStyle(emailRef) : applyErrorStyle(emailRef)
    
    if ((passRef.value.match(passRegex) && confPassRef.value.match(passRegex)) && (passRef.value == confPassRef.value)) {
      removeErrorStyle(passRef)
      removeErrorStyle(confPassRef)
    } else {
      applyErrorStyle(passRef)
      applyErrorStyle(confPassRef)
    }

    if (companyCheckbox.checked) {
      const companyNumber = document.querySelector("#companyNumber")
      
      let isValid = Number(companyNumber.value) < 1000 || Number(companyNumber.value > 9999)
      isValid ? applyErrorStyle(companyNumber) : removeErrorStyle(companyNumber)
    }

    let correctForm = true

    for (const currField of allFields) {
      if(currField.style.borderColor == 'red'){
        correctForm = false
      }
    }

    if (companyCheckbox.checked) {
      if (companyField.style.borderColor == 'red') {
        correctForm = false
      }
    }
    
    if (correctForm) {
      validMsgStyleRef.display = ''
    } else {
      validMsgStyleRef.display = 'none'
    }
  });

  function applyErrorStyle(errorField) {
    errorField.style.borderColor = "red";
  }
  function removeErrorStyle(validField) {
    validField.style.border = "";
  }
}
