const hoverbtn = document.getElementById('hoverbtn');
const clickbtn = document.getElementById('clickbtn');
const clearbtn = document.getElementById('clearbtn');
const colorInput = document.getElementById('color');
var color = "#e66465";

colorInput.addEventListener("input", function(){
    color = colorInput.value;
  }, false);

hoverbtn.addEventListener('click', () => {
    let squares = document.getElementsByClassName('square');
    
    /* Whenever the mouse go over the square in the grid, it changes color */
    for (let i = 0; i < squares.length; i++) {
        squares[i].addEventListener("mouseover", changeColor, false);
    }
});

clickbtn.addEventListener('click', () => {
    removeListeners();
    // let squares = document.getElementsByClassName('square');
    
    // /* Whenever the mouse go over the square in the grid, it changes color */
    // for (let i = 0; i < squares.length; i++) {
    //     squares[i].addEventListener("mousemove", function( event ) {
    //         event.target.style.backgroundColor = color;
    //       }, false);
    // }
});

/* Reset all cells to default color */
clearbtn.addEventListener('click', () => {
    let squares = document.getElementsByClassName('square');
    
    for (let i = 0; i < squares.length; i++) {
        squares[i].style.backgroundColor = "black";
    }
});

/**
 * It creates a grid of divs with the specified size
 * @param size - the number of rows and columns in the grid
 */
function generateGrid(size) {
    const grid = document.getElementById('grid');

    for (let r = 0; r < size; r++) {
        let row = document.createElement('div');
        row.setAttribute('class', 'row');

        for (let c = 0; c < size; c++) {
            let square = document.createElement('div');
            square.setAttribute('class', 'square');

            square.style.width = (500 / size).toString() + 'px';
            square.style.height = (500 / size).toString() + 'px';

            // square.style.border = '1px solid white';
            // square.style.backgroundColor = 'yellow';

            row.appendChild(square);
            row.style.height = (500 / size).toString() + 'px';
        }
        
        grid.appendChild(row);
    }

}

function changeColor(event) {
    event.target.style.backgroundColor = color;
}

function removeListeners() {
    let squares = document.getElementsByClassName('square');
    
    for (let i = 0; i < squares.length; i++) {
        squares[i].removeEventListener("mouseover", changeColor, false);
    }
}


generateGrid(80);