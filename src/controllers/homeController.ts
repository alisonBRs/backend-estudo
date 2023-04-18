import { Request, Response } from "express";
import { homeService } from "../service/home";

export class HomeController {
  public async get(req: Request, res: Response) {
    const allUsers = await homeService.getAll();

    return res.json(allUsers);
  }

  public async create(req: Request, res: Response): Promise<Response> {
    const { name, password, email } = req.body;

    const createUser = await homeService.createUser({
      name,
      password,
      email,
    });

    return res.json(createUser);
  }
}

export const homeController = new HomeController();
