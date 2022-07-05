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

            square.style.width = (500 / size).toString() + 'px';
            square.style.height = (500 / size).toString() + 'px';

            // square.style.border = '2px solid black';
            // square.style.backgroundColor = 'yellow';

            row.appendChild(square);
            row.style.height = (500 / size).toString() + 'px';
        }
        
        grid.appendChild(row);
    }

}

generateGrid(16);