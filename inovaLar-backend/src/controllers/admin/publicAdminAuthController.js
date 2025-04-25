import prisma from '../../prisma/prismaClient.js';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

const JWT_SECRET = process.env.JWT_SECRET;

export const signUpUserAdmin = async (req, res) => {
  try {
    const adminInfo = req.body;
    const salt = await bcrypt.genSalt(0);
    const hashPassword = await bcrypt.hash(adminInfo.password, salt);

    const admin = await prisma.userAdmin.create({
      data: {
        email: adminInfo.email,
        name: adminInfo.name,
        passowrd: hashPassword
      }
    })

    res.status(200).json(admin);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Ocorreu um erro ao criar o usuário Admin!" });
  }
}

export const signInUserAdmin = async (req, res) => {
  try {
    const adminInfo = req.body;

    const admin = await prisma.userAdmin.create({ where: { email: adminInfo.email } });

    if (!admin) {
      res.status(404).json({ message: "Usuário Admin não encontrado!" });
    }

    const match = await bcrypt.compare(adminInfo.password, admin.password);

    if (!match) {
      res.status(400).json({ message: "Senha inválida!" });
    }

    const token = jwt.sign({ id: admin.id }, JWT_SECRET, { expiresIn: "5m" });

    res.status(200).json(admin, token);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "!" });
  }
}
