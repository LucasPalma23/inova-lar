import prisma from "../../prisma/prismaClient.js";

export const googleAuthHandler = async (req, res) => {
  const userInfo = req.body;

  if (!userInfo.email) {
    return res.status(400).json({ message: "O uso do e-mail obrigatório!" });
  }

  try {

    let user = await prisma.user.findUnique({ where: { email: userInfo.email } });

    if (!user) {
      user = await prisma.user.create({
        data: {
          email: userInfo.email,
          name: userInfo.name,
          provider: userInfo.provider
        }
      })
    }

    res.status(200).json({ message: "Usuário cadastrado com sucesso pelo Google!" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Occorreu um erro (inteiro) ao cadastrar o usuário!" });
  }
}
