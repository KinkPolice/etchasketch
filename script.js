;;debugger
const container = document.querySelector('#container');
const setButton = document.querySelector('#button-set');
const clearButton = document.querySelector('#button-clear');
let color = "black";



createGrid = gridNumber => {
/*default number of rows/culumns is set to 8*/
   if (gridNumber === undefined){
        gridNumber = 8;
/*creating the grid with user-defined number of rows/columns if set */
  }else gridNumber = gridNumber;

        container.style.gridTemplateColumns =`repeat(${gridNumber}, 1fr)`;
        createCells()
        function createCells(){
            let gridSize = gridNumber * gridNumber;
        
            for (i = 0; i < gridSize; i++){
                let div = document.createElement('div');
                div.classList.add('cell');
                div.style.backgroundColor = '#e0e0e0';
                div.style.border = 'black solud 1px';
                container.appendChild(div);
        }
}}


function init(){
    createGrid();

}


window.addEventListener('load', init())