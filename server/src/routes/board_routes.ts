import Router from "@koa/router";
import { getBoard } from "../controllers/boardController";

export const router = new Router();

router.get("/board", getBoard);
