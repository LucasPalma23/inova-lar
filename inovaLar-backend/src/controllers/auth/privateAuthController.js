import prisma from "../../prisma/prismaClient.js";

export const login = async (req, res) => {
  try {
    await prisma.user.findMany();

    res.status(200).json({ message: "Usuário encontrado com sucesso!" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Usuário não encontrado!" });
  }
}

