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
    // if (this.board[row][col] === undefined) {
    //   return 0;
    // }
    if (row < 0 || row > this.height) {
      return 0;
    }
    if (col < 0 || col > this.width) {
      return 0;
    } else {
      return this.board[row][col];
    }
  }

  setCell(value, row, col) {
    if (row < 0 || row > this.height) {
      return 0;
    }
    if (col < 0 || col > this.width) {
      return 0;
    } else {
      const cellVal = (this.board[row][col] = value);
      return cellVal;
    }
  }

  toggleCell(row, col) {
    // if (this.board[row][col] === undefined) {
    //   return 'error!!!!';
    // }
    // if (row < 0 || row > this.height) {
    //   row = undefined;
    // }
    // if (col < 0 || col > this.width) {
    //   col = undefined;}
    if (this.board[row][col] === 0) {
      return (this.board[row][col] = 1);
    } else {
      return (this.board[row][col] = 0);
    }
  }

  /**
   * Return the amount of living neighbors around a given coordinate.
   */

  // eslint-disable-next-line complexity

  // TODO: Return the count of living neighbors.
  // eslint-disable-next-line complexity
  livingNeighbors(a, b) {
    let counter = 0;
    // if (this.getCell(a, b) === 1) {
    //   counter++;
    // }
    if (this.getCell(a - 1, b - 1) === 1) {
      counter++;
    }
    if (this.getCell(a - 1, b) === 1) {
      counter++;
    }
    if (this.getCell(a - 1, b + 1) === 1) {
      counter++;
    }
    if (this.getCell(a, b - 1) === 1) {
      counter++;
    }
    if (this.getCell(a, b + 1) === 1) {
      counter++;
    }
    if (this.getCell(a + 1, b - 1) === 1) {
      counter++;
    }
    if (this.getCell(a + 1, b) === 1) {
      counter++;
    }
    if (this.getCell(a + 1, b + 1) === 1) {
      counter++;
    }
    return counter;
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

    for (let i = 0; i < this.board.length; i++) {
      for (let j = 0; j < this.board[i].length; j++) {
        console.log(this.livingNeighbors(i, j));
      }
    }
    this.board = newBoard;
  }
}
