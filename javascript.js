const hoverbtn = document.getElementById('hoverbtn');
const clickbtn = document.getElementById('clickbtn');
const clearbtn = document.getElementById('clearbtn');
const random = document.getElementById('random');
const darken = document.getElementById('darken');
const lighten = document.getElementById('lighten');
const eraser = document.getElementById('eraser');
const colorInput = document.getElementById('color');
var color = "#00DAEA";
var colorMode = "color";

colorInput.addEventListener("input", function () {
    colorMode = "color";
    color = colorInput.value;
}, false);

random.addEventListener('click', () => {
    colorMode = "random";
});

darken.addEventListener('click', () => {
    colorMode = "darken";
});

lighten.addEventListener('click', () => {
    colorMode = "lighten";
});

eraser.addEventListener('click', () => {
    colorMode = "eraser";
});

hoverbtn.addEventListener('click', () => {
    let squares = document.getElementsByClassName('square');

    /* Whenever the mouse go over the square in the grid, it changes color */
    for (let i = 0; i < squares.length; i++) {
        squares[i].addEventListener("mouseover", changeColor);
    }
});

clickbtn.addEventListener('click', () => {
    removeListeners();

    let squares = document.getElementsByClassName('square');

    document.addEventListener('mouseup', removeListeners);
    for (let i = 0; i < squares.length; i++) {
        squares[i].addEventListener('mousedown', startColorMovement);
    }
});

/* Reset all cells to default color */
clearbtn.addEventListener('click', () => {
    let squares = document.getElementsByClassName('square');

    for (let i = 0; i < squares.length; i++) {
        squares[i].style.backgroundColor = "white";
    }
});

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
            square.style.backgroundColor = "white";

            row.appendChild(square);
            row.style.height = (500 / size).toString() + 'px';
        }

        grid.appendChild(row);
    }

}

function changeColor(event) {
    if (colorMode == "color") {
        event.target.style.backgroundColor = color;
    } else if (colorMode == "random") {
        event.target.style.backgroundColor = "#" + Math.floor(Math.random()*16777215).toString(16);
    } else if (colorMode == "darken") {
        event.target.style.backgroundColor = tinycolor(event.target.style.backgroundColor).darken(5).toString();
    } else if (colorMode == "lighten") {
        event.target.style.backgroundColor = tinycolor(event.target.style.backgroundColor).lighten(5).toString();
    } else if (colorMode == "eraser") {
        event.target.style.backgroundColor = "white";
    }
}

/**
 * Activtates the event for click and drag over a square, which changes the color of the square.
 */
function startColorMovement() {
    let squares = document.getElementsByClassName('square');

    for (let i = 0; i < squares.length; i++) {
        squares[i].addEventListener('mouseover', changeColor);
    }
}

function removeListeners() {
    let squares = document.getElementsByClassName('square');

    for (let i = 0; i < squares.length; i++) {
        squares[i].removeEventListener("mouseover", changeColor);
    }
}

generateGrid(30);