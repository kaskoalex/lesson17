"use strict";

let k = 0

const startButton = document.getElementsByClassName('handler_btn')[0]
const resetButton = document.getElementsByClassName('handler_btn')[1]
const elem = document.querySelector('#elem')
const nameCar =document.querySelector('#mark')

const createTable = function (parent) {
  let table = document.createElement('table');
  
  parent.appendChild(table);  

}

const createTr = function (cols, rows){  

  let table = document.querySelector('table');
  for (var i = 0; i < rows; i++) {
    let tr = document.createElement('tr');
    
    for (var j = 0; j < cols; j++) {
      let td = document.createElement('td');
      
        const select = document.querySelectorAll('select')
        const selectName = select[j].options[select[j].selectedIndex].textContent
        td.innerHTML = `${selectName}`
      
      tr.appendChild(td)

    }
    table.appendChild(tr);
    

  }

}



startButton.addEventListener('click', () => {k=k+1;
  if (k<2){
    createTable(elem); createTr(5, 1);    

  }  
  createTr(5, 1);


  let tr1 = document.querySelector('tr').childNodes
  let tr2 = document.querySelector('td').childNodes[0]
  console.dir(document.querySelector('tr').childNodes[1])

  tr1[0].textContent = 'Марка автомобиля'
  tr1[1].textContent = 'Цвет автомобиля'
  tr1[2].textContent = 'Тип двигателя.'
  tr1[3].textContent = 'Объём двигателя'
  tr1[4].textContent = 'Привод'



  
})

  
  
console.log(nameCar.childNodes[3].value)
console.log(nameCar.textContent)

let h = document.querySelector('.select')


console.dir(h)
console.log(h.innerHTML)
