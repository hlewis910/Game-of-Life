// width and height dimensions of the board
const width = 25;
const height = 20;


/**
 * Create a Game of Life instance
 */
const gol = new GameOfLife(width, height);


//Creating a table and appending it to the DOM
const cells = [];

//Table Created  --> 'tr' = table row
// ---> 'td' = table column
// We'll put the coordinates on the cell
    // Element itself (using dataset),
    // letting us fetch it in a click listener later.

const table = document.createElement("tbody");
for (let h = 0; h < height; h++) {
  const tr = document.createElement("tr");
  for (let w = 0; w < width; w++) {
    const td = document.createElement("td");
    td.dataset.row = h;
    td.dataset.col = w;
    cells.push(td);
    tr.append(td);
  }
  table.append(tr);
}
document.getElementById("board").append(table);


/**
 * Draws every cell from the gol instance into an actual, visible DOM element
 */

const paint = () => {
cells.forEach(td => {
  const cellValue = gol.getCell(td.dataset.row, td.dataset.col);
  if (cellValue === 1) {
    td.classList.add("alive");
  } else {
    td.classList.remove("alive");
  }
});
}


/**
 * Event Listeners
 */

document.getElementById("board").addEventListener("click", (event)=> {
  gol.toggleCell(event.target.dataset.row, event.target.dataset.col)
  paint()
});

document.getElementById("step_btn").addEventListener("click", () => {
  // TODO: Do one gol tick and paint
  gol.tick()
  paint()
});

let interval = null
document.getElementById("play_btn").addEventListener("click", () => {
  // TODO: Start playing by calling `tick` and paint
  // repeatedly every fixed time interval.
  // HINT:
  // https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/setInterval
  if (!interval) {
    interval = setInterval(() => {
      gol.tick()
      paint()
    }, 100)
  } else {
    clearInterval(interval)
    interval = null
  }
});

// TODO: Randomize the board and paint
document.getElementById("random_btn").addEventListener("click", () => {
gol.forEachCell((row,col) => {
  gol.setCell(Math.round(Math.random(), row, col)
})
paint()
});

  // TODO: Clear the board and paint
document.getElementById("clear_btn").addEventListener("click", event => {
gol.forEachCell((row, col) => {
  gol.setCell(0, row, col)
})
paint()
});
