import { Request, Response } from "express";
import { HomeService } from "../service/home";

class HomeController {
  public homeService = new HomeService();

  async get(req: Request, res: Response) {
    const allUsers = this.homeService.getAll;

    return allUsers;
  }

  public async create(req: Request, res: Response): Promise<Response> {
    const { name, password, email } = req.body;

    const createUser = await this.homeService.createUser({
      name,
      password,
      email,
    });

    return res.json(createUser);
  }
}

export const homeController = new HomeController();
