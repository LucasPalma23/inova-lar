import prisma from "../../prisma/prismaClient";
import { Request, Response } from "express";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

// Cria uma variável que armazena minha chave secreta do JWT (jsonwebtoken) chamando ela do meu ".env"
const JWT_SECRET = process.env.JWT_SECRET;

// Verifica se existe uma variável com nome e valores dentro do meu ".env"
if (!JWT_SECRET) {
  throw Error("Não existe uma chave JWT");
}

// Cria uma interface para o meu SignUp declarando as minhas variáveis de dados do usuário como "String"
interface BodyRequestSignUp {
  name: string;
  email: string;
  password?: string;
  providers: string;
}

// Cria uma interface para o meu SignIn declarando as minhas variáveis de dados do usuário como "string"
interface BodyRequestSignIn {
  email: string;
  password?: string;
}

export const signUp = async (req: Request, res: Response): Promise<void> => {
  const { name, email, password, providers }: BodyRequestSignUp = req.body;

  if (!name || !email || !password) {
    res.status(401).json({ success: false, error: "Todos os campos são obrigatórios!" });
    return;
  }

  const hashPassword = await bcrypt.hash(password, 10);

  try {
    const emailExists = await prisma.userPublic.findUnique({ where: { email } });

    if (emailExists) {
      res.status(401).json({ success: false, error: "Este e-mail já está cadastrado!" });
      return;
    }

    const user = await prisma.userPublic.create({
      data: {
        name,
        email,
        password: hashPassword,
        providers
      }
    })

    res.status(200).json({ success: true, message: "Usuário cadastrado com scuesso!", user });
  } catch (err) {
    console.error("Ocorreu um erro ao cadastrar o usuário: ", err);
    res.status(500).json({ success: false, error: "Ocorreu um erro interno no servidor! Tente novamente mais tarde!" });
  }
}

export const tokenGenerate = async (req: Request, res: Response): Promise<void> => {
  const { email, password }: BodyRequestSignIn = req.body;

  if (!email || !password) {
    res.status(401).json({ success: false, error: "Todos os campos sào obrigatórios!" });
    return;
  }

  try {
    const userExists = await prisma.userPublic.findUnique({ where: { email } });

    if (!userExists || !userExists.password) {
      res.status(401).json({ success: false, error: "Credenciais Inválidas!" });
      return;
    }

    const passwordMatch = userExists && await bcrypt.compare(password, userExists.password);

    if (!passwordMatch) {
      res.status(401).json({ success: false, error: "Credenciais Inválidas!" })
    }

    const token = jwt.sign({ id: userExists.id }, JWT_SECRET, { expiresIn: "1d" });

    res.status(200).json({ success: true, message: "Token gerado com sucesso!", token });
  } catch (err) {
    console.error("Ocorreu um erro ao gerar o token: ", err);
    res.status(500).json({ success: false, error: "Ocorreu um erro interno no servidor! Tente novamente mais tarde" });
  }

}

