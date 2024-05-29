const setButton = document.querySelector('#button-set')
const clearButton = document.querySelector('#button-clear')
const colorButton = document.querySelector('#button-color')
const container = document.querySelector('.container');
let color = "black"
let input = 8
let cells = container.querySelectorAll('div');





function changeColor(e){  

    if (color === 'black'){
    e.target.style.backgroundColor = 'black'
} if (color === 'random'){
    e.target.style.backgroundColor = `hsl(${Math.random() *360}, 100%, 50%)`
}
}


function createGrid(gridNumber) {
/*default number of rows/culumns is set to 8*/
   if (gridNumber === undefined){
        gridNumber = 8;
/*creating the grid with user-defined number of rows/columns if set */
  }else gridNumber = gridNumber

        
        container.replaceChildren()
        cells.forEach((div) => div.remove());
        container.style.gridTemplateColumns =`repeat(${gridNumber}, 1fr)`
        container.style.gridTemplateRows = `repeat(${gridNumber}, 1fr)`


            let gridSize = gridNumber * gridNumber;
        
            for (i = 0; i < gridSize; i++){
                let cell = document.createElement('div')
                cell.classList.add('nextCell')
                container.style.backgroundColor = '#e0e0e0'
                cell.style.border = 'black solid 1px';
                cell.addEventListener('mouseover', changeColor)
                container.appendChild(cell)
        }
}

function init(){
let boxes = document.querySelectorAll('.cells')
boxes.forEach(box => box.addEventListener('mouseover', e.target.style.backgroundColor = 'e0e0e0')
)}

createGrid(input);
init



    clearButton.addEventListener('click', function(){
        let cells = container.querySelectorAll('div');
        cells.forEach((div) => (div.style.backgroundColor = '#e0e0e0'));
    })

    colorButton.addEventListener('click', function(){
        if (color === 'black'){
                document.getElementById('button-color').innerHTML='Black color'
                return color = 'random'
        }if (color === 'random'){
                document.getElementById('button-color').innerHTML='Rainbow colors'
                return color = 'black'
        }
    })

    setButton.addEventListener('click', function() {
        let input = prompt('How big the grid should be?\(min 100\)', 8)
        if (typeof input <= 100 && typeof input === 'undefined'){
            return
        }
        createGrid(input);
    });


