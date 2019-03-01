class GameOfLife {
  constructor(width, height) {
    this.width = width;
    this.height = height;
    this.board = this.makeBoard();
  }

  makeBoard() {
    const gameGrid = [];
    for (let i = 0; i < this.height; i++) {
      let row = [];
      gameGrid.push(row);
      for (let j = 0; j < this.width; j++) {
        row.push(0);
      }
    }
    return gameGrid;
  }

  getCell(row, col) {
    if (this.board[row][col] === undefined) {
      return 0;
    } else {
      return this.board[row][col];
    }
  }
  /**
   * Return the amount of living neighbors around a given coordinate.
   */

  livingNeighbors(row, col) {
    // TODO: Return the count of living neighbors.
  }

  /**
   * Given the present board, apply the rules to generate a new board
   */

  tick() {
    const newBoard = this.makeBoard();
    // TODO: Here is where you want to loop through all the cells
    // on the existing board and determine, based on it's neighbors,
    // whether the cell should be dead or alive in the new board
    // (the next iteration of the game)
    //
    // You need to:
    // 1. Count alive neighbors for all cells
    // 2. Set the next state of all cells in newBoard,
    // based on their current alive neighbors
    this.board = newBoard;
  }
}
