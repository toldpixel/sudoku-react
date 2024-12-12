import Context, { DefaultContext } from "koa";
import { BoardStore } from "../models/board";

const store = new BoardStore();

export const getBoard = async (ctx: DefaultContext) => {
  try {
    const { size, difficulty } = ctx.query;
    const newBoard = await store.getBoard(
      parseInt(size as string),
      difficulty as string
    );
    ctx.status = 200;
    console.log(newBoard);
    ctx.body = newBoard;
  } catch (error) {
    console.error(error);
  }
};
