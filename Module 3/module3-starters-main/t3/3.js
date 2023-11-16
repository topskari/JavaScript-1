'use strict';
const names = ['John', 'Paul', 'Jones'];
let html = ''
const ul = document.querySelector('#target')
for (let name of names){
  html += `<li>${name}</li>`
}
ul.innerHTML = html