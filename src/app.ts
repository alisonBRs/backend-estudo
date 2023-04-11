import express from "express";
import { RouteType } from "./interfaces/route";
const cors = require("cors");

export const port = 3080;
export const message = `Server running at port: http://localhost:${port}`;

export class App {
  public app: express.Application;

  constructor(routes: RouteType[]) {
    this.app = express();
    this.middlewares();
    this.initializeRoutes(routes);
  }

  private middlewares() {
    this.app.use(express.json());
    this.app.use(cors());
  }

  private initializeRoutes(routes: RouteType[]) {
    routes.forEach(({ path, router }) => {
      this.app.use(path || "/", router);
      console.log(`Route ${path} initialized!`);
    });
  }

  public listen(port: number, message: string) {
    this.app.listen(port, () => console.log(message));
  }
}
