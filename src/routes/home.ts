import { Request, Response, Router } from "express";
import { RouteType } from "../interfaces/route";
import { HomeService } from "../service/home";
import { homeController } from "../controllers/homeController";

export class Home implements RouteType {
  public path = "/home";
  public router = Router();

  public homeService = new HomeService();

  constructor() {
    this.route();
  }

  private route() {
    this.router.get("/", async (req: Request, res: Response) => {
      const allUsers = await this.homeService.getAll();
      return res.json(allUsers);
    });

    this.router.post("/", homeController.create);
  }
}
