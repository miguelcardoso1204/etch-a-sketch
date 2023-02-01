
let gridSize = document.getElementById("myRange").value;

let colorIndicator = document.getElementById("colorIndicator");
let darkenIndicator = document.getElementById("darkenIndicator");
let rainbowIndicator = document.getElementById("rainbowIndicator");

document.getElementById("colorPicker").addEventListener('click', () => {
    darkenOn = false;
    darkenIndicator.style.backgroundColor = "#701414";
    rainbowOn = false;
    rainbowIndicator.style.backgroundColor = "#701414";
    colorIndicator.style.backgroundColor = "red";
    
})



function createGrid () {
    let grid = document.getElementById("grid"); 
    grid.innerHTML = ''; //Delete previous grid
    grid.style.gridTemplateRows = `repeat(${gridSize}, 1fr)`;
    grid.style.gridTemplateColumns = `repeat(${gridSize}, 1fr)`;
    grid.addEventListener('click', turnBrushOnOff);
    
    for(let i = 0; i < (gridSize*gridSize); i++) {
        let square = document.createElement("div");
        square.style.backgroundColor = "white";
        square.style.height = "100%";
        square.style.width = "100%";
        square.style.border = "1px solid rgb(200, 200, 200)";
        square.style.filter = "brightness(1.0)";

        square.addEventListener('mouseover', styleSelection);
        grid.append(square);
    }
}


//Switch brush on/off by clicking on the etch-a-sketch
let turnBrushOn = false;
function turnBrushOnOff() {
    if (turnBrushOn) {
        turnBrushOn = false;
    } else if (!turnBrushOn) {
        turnBrushOn = true;
    }
}


//Rainbow Mode Functionality
let rainbowOn = false;
document.getElementById("rainbowButton").addEventListener('click', rainbowSwitch);
function rainbowSwitch(){
    darkenOn = false;
    darkenIndicator.style.backgroundColor = "#701414";
    colorIndicator.style.backgroundColor = "#701414";
    if (!rainbowOn) {
        rainbowIndicator.style.backgroundColor = "red";
        rainbowOn = true;
    } else {
        rainbowIndicator.style.backgroundColor = "#701414";
        rainbowOn = false;
    }
}

function random256() {
    return Math.floor(Math.random() * 256) + 1;
}


//Darken Mode Functionality
let darkenOn = false;
document.getElementById("darkenButton").addEventListener('click', darkenSwitch);
function darkenSwitch(){
    rainbowOn = false;
    rainbowIndicator.style.backgroundColor = "#701414";
    colorIndicator.style.backgroundColor = "#701414";
    if (!darkenOn) {
        darkenIndicator.style.backgroundColor = "red";
        darkenOn = true;
    } else {
        darkenIndicator.style.backgroundColor = "#701414";
        darkenOn = false;
    }
}



//Change color of current hovered square
function styleSelection() {
    if (turnBrushOn) {
        if (darkenOn) {
            let currentBrightness = getCurrentBrightness(this.style.filter);
            this.style.filter.innerHTML = '';
            this.style.filter = `brightness(${currentBrightness - 0.1})`
        } else if (rainbowOn) {
            this.style.backgroundColor = `rgb(${random256()}, ${random256()}, ${random256()})`;
        } else {
        this.style.backgroundColor = document.getElementById("colorPicker").value;
        }
    }
}

function getCurrentBrightness(string) {
    if (string.length === 13) {
        if (string.charCodeAt(11) === 49) {
            return 1;
        } else if (string.charCodeAt(11) === 48) {
            return 0;
        }
    } else if (string.length === 15) {
        return string.slice(11, 14);
    }
}


var slider = document.getElementById("myRange");
var output = document.getElementById("demo");
output.innerHTML = `${slider.value} x ${slider.value}`; // Display the default slider value

// Update the current slider value (each time you drag the slider handle)
slider.oninput = function() {
  output.innerHTML = `${this.value} x ${this.value}`;
  gridSize = this.value;
  createGrid();
}


createGrid();