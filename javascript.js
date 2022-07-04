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
            row.appendChild(square);
        }

        grid.appendChild(row);
    }

}

generateGrid(16);