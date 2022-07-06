const hoverbtn = document.getElementById('hoverbtn');
const clickbtn = document.getElementById('clickbtn');

hoverbtn.addEventListener('click', () => {
    let squares = document.getElementsByClassName('square');
    
    /* Whenever the mouse go over the square in the grid, it changes color */
    for (let i = 0; i < squares.length; i++) {
        squares[i].addEventListener("mouseover", function( event ) {
            event.target.style.backgroundColor = "orange";
          }, false);
    }
});

clickbtn.addEventListener('click', () => {
    let squares = document.getElementsByClassName('square');
    
    for (let i = 0; i < squares.length; i++) {
        squares[i].setAttribute('id', 'click');
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

            square.style.border = '1px solid white';
            // square.style.backgroundColor = 'yellow';

            row.appendChild(square);
            row.style.height = (500 / size).toString() + 'px';
        }
        
        grid.appendChild(row);
    }

}



generateGrid(3);