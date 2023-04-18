import { PrismaClient } from "@prisma/client";

interface userService {
  name: string;
  password: string;
  email?: string;
}

const prisma = new PrismaClient();

export class HomeService {
  public async getAll() {
    const getUser = await prisma.user.findMany();

    return getUser;
  }

  public async getUser(id: number) {
    const user = await prisma.user.findUnique({
      where: {
        id,
      },
    });

    return user;
  }

  public async createUser(request: userService) {
    const createUser = await prisma.user.create({
      data: {
        name: request.name,
        password: request.password,
        email: request.email,
      },
    });

    return createUser;
  }
}

export const homeService = new HomeService();
