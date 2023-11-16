'use strict'
const start = document.querySelector('#start')
const result = document.querySelector('#result')
start.addEventListener('click', function(evt){
  let num1 = +document.querySelector('#num1').value
  let num2 = +document.querySelector('#num2').value
  let operation = document.querySelector('#operation').value
  if (operation == 'add'){
    result.innerHTML = num1 + num2
  }
  if (operation == 'sub'){
    result.innerHTML = num1 - num2
  }
  if (operation == 'multi'){
    result.innerHTML = num1 * num2
  }
  if (operation == 'div'){
    result.innerHTML = num1 / num2
  }
})
