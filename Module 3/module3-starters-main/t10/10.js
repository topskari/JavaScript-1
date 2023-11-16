'use strict'
const form = document.querySelector('#source')
form.addEventListener('submit', function(evt){
  evt.preventDefault()
  let fname = document.querySelector('input[name="firstname"]').value
  let lname = document.querySelector('input[name="lastname"]').value
  document.querySelector('#target').innerHTML =
      `Your name is ${fname} ${lname}`
})
