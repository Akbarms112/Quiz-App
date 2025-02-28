//const scriptURL = 'https://script.google.com/macros/s/AKfycbzXRQOWfAc6jMDO_bOiY04o6hB6yMBR_LlFKrrv0ghvfiVrRvRr6AEVKzXj5WreV2hCxw/exec'
const scriptURL = 'https://script.google.com/macros/s/AKfycbzmI53_AfXAJalhlID-lRL9RMnk6WbdpG0KP0jx4bEy/dev'

const form = document.forms['contact-form']

form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, {method: 'POST', body: new FormData(form)})
  .then(response => alert("Thank you! details is submitted successfully." ))
  .then(() => { window.location.reload(); })
  .catch(error => console.error('Error!', error.message))
})

