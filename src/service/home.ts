import { PrismaClient } from "@prisma/client";

interface userService {
  name: string;
  password: string;
  email?: string;
}

export class HomeService {
  private prisma = new PrismaClient();

  async getAll() {
    return this.prisma.user.findMany();
  }

  async getUser(id: number) {
    const user = await this.prisma.user.findUnique({
      where: {
        id,
      },
    });

    return user;
  }

  async createUser(request: userService) {
    const createUser = await this.prisma.user.create({
      data: {
        name: request.name,
        password: request.password,
        email: request.email,
      },
    });

    return createUser;
  }
}
