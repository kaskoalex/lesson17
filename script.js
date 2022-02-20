"use strict";

const startButton = document.getElementsByClassName('handler_btn')[0]
const resetButton = document.getElementsByClassName('handler_btn')[1]
const elem = document.querySelector('#elem');
const nameCar =document.querySelector('#mark')


const createTable = function (parent, cols, rows) {
  let table = document.createElement('table');

  for (var i = 0; i < rows; i++) {
    let tr = document.createElement('tr');
    for (var j = 0; j < cols; j++) {
      let td = document.createElement('td');
      tr.appendChild(td)

    }
    table.appendChild(tr);
  }
  parent.appendChild(table);

}
let i=0

startButton.addEventListener('click', () => {
  i = i + 1; createTable(elem, 5, 1 + i)


  let tr1 = document.querySelector('tr').childNodes
  let tr2 = document.querySelector('td').childNodes[0]
  console.dir(document.querySelector('tr').childNodes[1])

  tr1[0].textContent ='Марка автомобиля'
  tr1[1].textContent = 'Цвет автомобиля'
  tr1[2].textContent = 'Тип двигателя.'
  tr1[3].textContent = 'Объём двигателя'
  tr1[4].textContent = 'Привод'

  tr2[0].textContent = 'Привод'
})



  
  
console.log(nameCar.childNodes[3].value)


