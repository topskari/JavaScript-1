'use strict'
const start = document.querySelector('#start')
const result = document.querySelector('#result')
start.addEventListener('click', function(evt){
  let operation = document.querySelector('#calculation').value

  if (operation.includes('+')){
    let num1=+operation.split('+')[0]
    let num2=+operation.split('+')[1]
    result.innerHTML = num1 + num2
  }
  if (operation.includes('-')){
    let num1=+operation.split('-')[0]
    let num2=+operation.split('-')[1]
    result.innerHTML = num1 - num2
  }
  if (operation.includes('*')){
    let num1=+operation.split('*')[0]
    let num2=+operation.split('*')[1]
    result.innerHTML = num1 * num2
  }
  if (operation.includes('/')){
    let num1=+operation.split('/')[0]
    let num2=+operation.split('/')[1]
    result.innerHTML = num1 / num2
  }
})