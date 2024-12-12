import { generateBoard } from "../service/generateboard";

class Board {
  size: number;
  difficulty: string;

  constructor(size: number = 0, difficulty: string = "") {
    this.size = size;
    this.difficulty = difficulty;
  }

  setSize(size: number) {
    this.size = size;
  }

  setDifficulty(d: string) {
    this.difficulty = d;
  }

  getBoard() {
    const newBoard = generateBoard(this.size, this.difficulty);
    return newBoard;
  }
}

const board = new Board();

export class BoardStore {
  async getBoard(size: number, difficulty: string) {
    try {
      board.setSize(size);
      board.setDifficulty(difficulty);
      const newBoard = board.getBoard();
      return newBoard;
    } catch (error) {
      console.error(error);
      throw new Error("Couldnt generate board");
    }
  }
}
