function createGrid () {
    let grid = document.getElementById("grid");
    grid.style.gridTemplateRows = "repeat(16, 1fr)";
    grid.style.gridTemplateColumns = "repeat(16, 1fr)";

    for(let i = 0; i < (16*16); i++) {
        let square = document.createElement("div");
        square.style.backgroundColor = "white";
        square.style.border = "1px solid black";
        square.style.height = "100%";
        square.style.width = "100%";
        grid.append(square);
    }
}

createGrid();