import { Request, Response, Router } from "express";
import { RouteType } from "../interfaces/route";
import { homeService } from "../service/home";
import { homeController } from "../controllers/homeController";

export class Home implements RouteType {
  public path = "/home";
  public router = Router();

  constructor() {
    this.route();
  }

  private route() {
    this.router.get("/", homeController.get);

    this.router.post("/", homeController.create);
  }
}
