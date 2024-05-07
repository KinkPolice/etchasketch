;;debugger
const container = document.querySelector('#container');
const setButton = document.querySelector('#button-set');
const clearButton = document.querySelector('#button-clear');
let color = "black";



createGrid = gridNumber => {
    if (gridNumber === undefined){
        gridNumber = 8;
    }else gridNumber = gridNumber;
        let cells = container.querySelectorAll('div');
        cells.forEach((div) => div.remove());
        container.style.gridTemplateColumns =`repeat(${gridNumber}, 1fr)`;
        container.style.gridTemplateRows = `repeat(${gridNumber}, 1fr)`;

        let gridSize = gridNumber * gridNumber;
        for (i = 0; i < gridSize; i++){
            let cell = document.createElement('div');
            cell.classList.add('cell');
            container.style.backgroundColor = '#e0e0e0';
            cell.addEventListener('mouseover', addColor);
            container.appendChild(cell);
    }

let boxes = document.querySelectorAll('.cells');
boxes.forEach(box => box.addEventListener('mouseover', ()=>{
    boxes.style.backgroundColor = 'gray';
}));
}

createGrid(8);

function addColor(){
    color === 'random' ? this.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)` : this.style.backgroundColor = color;
}



resetGrid = () => {
    let boxes = document.querySelectorAll('.cells');
    boxes.forEach(box => {
        boxes.style.backgroundColor = 'white';
    })
}



    clearButton.addEventListener('click', resetGrid);
    setButton.addEventListener('click', function() {
        let input = prompt('How big the grid should be?', 8);
        if (typeof input === 'undefined'){
            return
        }
        createGrid(input);
    });

