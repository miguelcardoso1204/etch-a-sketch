let turnBrushOn = false;

function createGrid () {
    let grid = document.getElementById("grid");
    grid.style.gridTemplateRows = "repeat(16, 1fr)";
    grid.style.gridTemplateColumns = "repeat(16, 1fr)";
    grid.addEventListener('click', turnBrushOnOff);
    


    for(let i = 0; i < (16*16); i++) {
        let square = document.createElement("div");
        square.style.backgroundColor = "white";
        square.style.height = "100%";
        square.style.width = "100%";

        //Temporary
        square.style.border = "1px solid black";
        //Temporary

        square.addEventListener('mouseover', styleSelection);
        

        



        grid.append(square);
    }
}

function turnBrushOnOff() {
    if (turnBrushOn) {
        turnBrushOn = false;
    } else if (!turnBrushOn) {
        turnBrushOn = true;
    }
    console.log(turnBrushOn);
}

function styleSelection() {
    if (turnBrushOn) {
        this.style.backgroundColor = "black";
    }
    
}

createGrid();