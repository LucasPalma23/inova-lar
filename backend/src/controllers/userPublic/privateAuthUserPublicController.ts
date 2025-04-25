import prisma from "../../prisma/prismaClient";
import { Request, Response } from "express";

export const signIn = async (req: Request, res: Response): Promise<void> => {
  try {
    const user = await prisma.userPublic.findMany();

    res.status(200).json({ success: true, message: "Usuário logado com sucesso!", user });
  } catch (err) {
    console.error("Ocorreu um erro ao fazer login: ", err);
    res.status(500).json({ success: false, error: "Ocorreu um erro interno no servidor! Tente novamente mais tarde!" });
  }
}
