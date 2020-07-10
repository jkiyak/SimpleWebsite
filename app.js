'use strict'
console.log('lmao can you see this')

//add the date
let today = new Date();
let formatDate = today.toDateString();
let selectElement = document.getElementById('date');
selectElement.innerHTML = formatDate;