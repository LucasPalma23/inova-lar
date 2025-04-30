import prisma from "../../prisma/prismaClient";
import { Request, Response } from "express";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { z } from "zod";

// Cria uma variável que armazena minha chave secreta do JWT (jsonwebtoken) chamando ela do meu ".env"
const JWT_SECRET = process.env.JWT_SECRET;

// Verifica se existe uma variável com nome e valores dentro do meu ".env"
if (!JWT_SECRET) {
  throw Error("Não existe uma chave JWT");
}

// Cria uma interface para o meu SignUp declarando as minhas variáveis de dados do usuário como "String"
const BodyRequestSignUp = z.object({
  name: z.string().min(1),
  email: z.string().min(1),
  password: z.string().min(1).optional(),
  providers: z.string(),
})

// Cria uma interface para o meu SignIn declarando as minhas variáveis de dados do usuário como "string"
const BodyRequestSignIn = z.object({
  email: z.string().min(1),
  password: z.string().min(1).optional(),
})

export const signUp = async (req: Request, res: Response): Promise<void> => {
  const validatedData = BodyRequestSignUp.safeParse(req.body);

  if (!validatedData.success) {
    res.status(401).json({ success: false, error: "Todos os campos são obrigatórios!" });
    return;
  }
  const { name, email, password, providers } = validatedData.data;

  if (!password) {
    console.error("A senha não existe!");
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
  const validatedData = BodyRequestSignIn.safeParse(req.body);

  if (!validatedData.success) {
    res.status(401).json({ success: false, error: "Todos os campos sào obrigatórios!" });
    return;
  }
  const { email, password } = validatedData.data;

  if (!password) {
    console.error("A senha não existe!");
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

