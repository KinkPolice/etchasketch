const setButton = document.querySelector('#button-set')
const clearButton = document.querySelector('#button-clear')
const colorButton = document.querySelector('#button-color')
const container = document.querySelector('.container');
let color = "black"
let cells = container.querySelectorAll('div');


function createGrid(gridNumber) {
/*default number of rows/culumns is set to 8*/
   if (gridNumber === undefined){
        gridNumber = 8;
/*creating the grid with user-defined number of rows/columns if set */
  }else gridNumber = gridNumber

        

        cells.forEach((div) => div.remove());
        container.style.gridTemplateColumns =`repeat(${gridNumber}, 1fr)`
        container.style.gridTemplateRows = `repeat(${gridNumber}, 1fr)`


            let gridSize = gridNumber * gridNumber;
        
            for (i = 0; i < gridSize; i++){
                let cell = document.createElement('div')
                cell.classList.add('nextCell')
                container.style.backgroundColor = '#e0e0e0'
                cell.style.border = 'black solid 1px';
                cell.addEventListener('mouseover', (event) =>{
                    cell.style.backgroundColor = color;
                })
                container.appendChild(cell)
        }
}

function init(){
let boxes = document.querySelectorAll('.cells')
boxes.forEach(box => box.addEventListener('mouseover', e.target.style.backgroundColor = 'e0e0e0')
)}

createGrid(8);
init

function changeColor(){   
    cell.addEventListener('mouseover', function(){ 
        e.target.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`
    })
}




    clearButton.addEventListener('click', function(){
        e.target.style.backgroundColor = 'e0e0e0'
    })

    colorButton.addEventListener('click', function(){
    color = 'random'
    changeColor
    })

    setButton.addEventListener('click', function() {
        let input = prompt('How big the grid should be?', 8)
        if (typeof input <= 100 && typeof input === 'undefined'){
            return
        }
        createGrid(input);
    });


