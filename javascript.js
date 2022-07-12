/* Initlization */

const sizeInput = document.getElementById('sizeInput');
var sizeDisplay = document.getElementsByClassName('sizeDisplay');
sizeDisplay[0].innerHTML = sizeInput.value;
sizeDisplay[1].innerHTML = sizeInput.value;
generateGrid(sizeInput.value);

var color = "#333334";
var colorMode = "color";

/* UI buttons and listeners */

const colorInput = document.getElementById('color');
colorInput.addEventListener("input", function () {
    resetPen();
    colorInput.style.opacity = 1;
    colorMode = "color";
    color = colorInput.value;
}, false);

const random = document.getElementById('random');
random.addEventListener('click', () => {
    resetPen();
    random.style.backgroundColor = '#333334';
    random.style.color = 'white';
    random.style.opacity = 1;
    colorMode = "random";
});

const darken = document.getElementById('darken');
darken.addEventListener('click', () => {
    resetPen();
    darken.style.backgroundColor = '#333334';
    darken.style.color = 'white';
    darken.style.opacity = 1;
    colorMode = "darken";
});

const lighten = document.getElementById('lighten');
lighten.addEventListener('click', () => {
    resetPen();
    lighten.style.backgroundColor = '#333334';
    lighten.style.color = 'white';
    lighten.style.opacity = 1;
    colorMode = "lighten";
});

const eraser = document.getElementById('eraser');
eraser.addEventListener('click', () => {
    resetPen();
    eraser.style.backgroundColor = '#333334';
    eraser.style.color = 'white';
    eraser.style.opacity = 1;
    colorMode = "eraser";
});

const hoverbtn = document.getElementById('hoverbtn');
hoverbtn.addEventListener('click', () => {
    resetMouse();
    hoverbtn.style.backgroundColor = '#333334';
    hoverbtn.style.color = 'white';
    hoverbtn.style.opacity = 1;

    let squares = document.getElementsByClassName('square');

    /* Whenever the mouse go over the square in the grid, it changes color */
    for (let i = 0; i < squares.length; i++) {
        squares[i].addEventListener("mouseover", changeColor);
    }
});

const clickbtn = document.getElementById('clickbtn');
clickbtn.addEventListener('click', () => {
    resetMouse();
    clickbtn.style.backgroundColor = '#333334';
    clickbtn.style.color = 'white';
    clickbtn.style.opacity = 1;
    removeListeners();

    let squares = document.getElementsByClassName('square');

    document.addEventListener('mouseup', removeListeners);
    for (let i = 0; i < squares.length; i++) {
        squares[i].addEventListener('mousedown', changeColor);
        squares[i].addEventListener('mousedown', startColorMovement);
    }
});

/* Reset all cells to default color */
const clearbtn = document.getElementById('clearbtn');
clearbtn.addEventListener('click', () => {
    let squares = document.getElementsByClassName('square');

    for (let i = 0; i < squares.length; i++) {
        squares[i].style.backgroundColor = "white";
    }
});

/* Functions */

function changeSize() {
    sizeDisplay[0].innerHTML = sizeInput.value;
    sizeDisplay[1].innerHTML = sizeInput.value;
    generateGrid(sizeInput.value);
    resetMouse();
}

function generateGrid(size) {
    const grid = document.getElementById('grid');
    while (grid.firstChild) {
        grid.removeChild(grid.lastChild);
    }

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
        event.target.style.backgroundColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
    } else if (colorMode == "darken") {
        event.target.style.backgroundColor = tinycolor(event.target.style.backgroundColor).darken(5).toString();
    } else if (colorMode == "lighten") {
        event.target.style.backgroundColor = tinycolor(event.target.style.backgroundColor).lighten(5).toString();
    } else if (colorMode == "eraser") {
        event.target.style.backgroundColor = "white";
    }
}

/* Activtates the event for click and drag over a square, which changes the color of the square. */
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

function resetPen() {
    random.style.backgroundColor = '#EDEDED';
    darken.style.backgroundColor = '#EDEDED';
    lighten.style.backgroundColor = '#EDEDED';
    eraser.style.backgroundColor = '#EDEDED';

    random.style.color = 'black';
    darken.style.color = 'black';
    lighten.style.color = 'black';
    eraser.style.color = 'black';

    colorInput.style.opacity = 0.6;
    random.style.opacity = 0.6;
    darken.style.opacity = 0.6;
    lighten.style.opacity = 0.6;
    eraser.style.opacity = 0.6;
}

function resetMouse() {
    hoverbtn.style.backgroundColor = '#EDEDED';
    clickbtn.style.backgroundColor = '#EDEDED';

    hoverbtn.style.color = 'black';
    clickbtn.style.color = 'black';

    hoverbtn.style.opacity = 0.6;
    clickbtn.style.opacity = 0.6;
}