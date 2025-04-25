import prisma from "../../prisma/prismaClient.js";

export const loginUserAdmin = async (req, res) => {
  try {
    const admin = await prisma.userAdmin.findMany();

    res.status(200).json(admin);
  } catch (err) {
    console.error(err);
    res.status(401).json({ message: "Usuário Admin não encontrado!" });
  }
}
