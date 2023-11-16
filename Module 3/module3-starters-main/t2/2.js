'use strict'
const ul = document.querySelector('#target')
const li1 = document.createElement('li')
const li2 = document.createElement('li')
const li3 = document.createElement('li')
li1.textContent = 'First item'
li2.textContent = 'Second item'
li3.textContent = 'Third item'
ul.appendChild(li1)
ul.appendChild(li2)
ul.appendChild(li3)
document.querySelectorAll('li')[1].classList.add('my-item')