//const scriptURL = 'https://script.google.com/macros/s/AKfycbzXRQOWfAc6jMDO_bOiY04o6hB6yMBR_LlFKrrv0ghvfiVrRvRr6AEVKzXj5WreV2hCxw/exec'
//const scriptURL = 'https://script.google.com/macros/s/AKfycbzXRQOWfAc6jMDO_bOiY04o6hB6yMBR_LlFKrrv0ghvfiVrRvRr6AEVKzXj5WreV2hCxw/exec'
const scriptURL = 'https://script.google.com/macros/s/AKfycbxFP6hYOY3tpcIDRbAIlrIeKUMx-8mEoyWOWqu5q0ks0t6Rfn3CGWMzQqColHv63xQA1g/exec'
const form = document.forms['contact-form']

form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, {method: 'POST', body: new FormData(form)})
  .then(response => {
    alert("Thank you! details is submitted successfully." );
    window.location.href="./index.html";
})
  //.then(() => { window.location.reload(); })
  .catch(error => console.error('Error!', error.message))
})

