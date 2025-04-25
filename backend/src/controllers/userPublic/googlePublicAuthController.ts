import prisma from "../../prisma/prismaClient";
import { AdapterUser } from "@auth/core/adapters";

export const signInGoogle = async (user: AdapterUser): Promise<boolean> => {
  try {
    if (!user.email || !user.name) return false;

    const userExists = await prisma.userPublic.findUnique({ where: { email: user.email } });

    if (userExists) return false

    await prisma.userPublic.create({
      data: {
        name: user.name,
        email: user.email,
        providers: "Google",
      }
    })

    return true;

  } catch (err) {
    console.error("Ocorreu um erro ao cadastrar o usuário: ", err);
    return false
  }
}
