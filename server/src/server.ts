import Koa from "koa";
import bodyParser from "koa-bodyparser";
import cors from "@koa/cors";
import { router } from "./routes/board_routes";

const app = new Koa();
const port = 3000;

app.use(cors());
app.use(bodyParser());

app.use(router.routes());
app.use(router.allowedMethods());

(async () => {
  try {
    app.listen(port, () => {
      console.log(`Server is running on port: ${port}`);
    });
  } catch (error) {
    console.error(error);
  }
})();
