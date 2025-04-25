import prisma from "../../prisma/prismaClient.js";
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

const JWT_SECRET = process.env.JWT_SECRET;

export const signUp = async (req, res) => {
  try {
    const userInfo = req.body;
    const salt = await bcrypt.genSalt(10);
    const hashPassword = await bcrypt.hash(userInfo.password, salt);

    await prisma.user.create({
      data: {
        email: userInfo.email,
        name: userInfo.name,
        password: hashPassword,
        provider: userInfo.provider,
      }
    })

    res.status(200).json({ message: "Usuário cadastrado com sucesso!" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Ocorreu um erro ao cadastrar o usuário!" });
  }
}

export const signIn = async (req, res) => {
  try {
    const userInfo = req.body;

    const user = await prisma.user.findUnique({ where: { email: userInfo.email } });

    if (!user) {
      res.status(404).json({ message: "Usuário não encontrado!" });
      console.error(user.data);
    }

    const match = await bcrypt.compare(userInfo.password, user.password);

    if (!match) {
      res.status(400).json({ message: "Senha inválida!" });
    }

    const token = jwt.sign({ id: user.id }, JWT_SECRET, { expiresIn: "1d" });

    res.status(200).json({ token });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Ocorreu um erro ao fazer login!" });
  }
}
