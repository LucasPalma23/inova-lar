import prisma from "../../prisma/prismaClient";
import { Request, Response } from "express";

// Cria uma funcã́o que traz o usuário
export const loginUser = async (req: Request, res: Response): Promise<void> => {
  try {
    // Cria uma variável que armazena o usuário
    const user = await prisma.userAdmin.findMany();

    // Retorna status "200" comfirmando que o usuário foi logado com sucesso!
    res.status(200).json({ success: true, message: "Usuário foi logado com sucesso!", user });
  } catch (err) {
    // Retorna status "500" para quando algo do meu servidor deu errado!
    console.error("Ocorreu um erro ao executar o login: ", err);
    res.status(500).json({ success: false, error: "Ocorreu um erro interno no servidor! Tente novamente mais tarde!" });
  }

}
