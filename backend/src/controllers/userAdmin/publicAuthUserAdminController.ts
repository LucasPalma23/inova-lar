import prisma from "../../prisma/prismaClient";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { Request, Response } from "express";

// Cria uma variável que armazena minha chave secreta do JWT (jsonwebtoken) chamando ela do meu ".env"
const JWT_SECRET = process.env.JWT_SECRET;

// Verifica se existe uma variável com nome e valores dentro do meu ".env"
if (!JWT_SECRET) {
  throw Error("Não existe uma chave JWT");
}

// Cria uma interface para o meu SignUp declarando as minhas variáveis de dados do usuário como "String"
interface BodyRequestSignUp {
  username: string;
  password: string;
}

// Cria uma interface para o meu SignIn declarando as minhas variáveis de dados do usuário como "string"
interface BodyRequestSignIn {
  username: string;
  password: string
}

// Cria uma função para criar um novo Usuário Administrativo
export const signUp = async (req: Request, res: Response): Promise<void> => {
  // Crias as variáveis que que armazenam os dados do usuário
  const { username, password }: BodyRequestSignUp = req.body;

  // Verifica se todos os campos obrigatórios foram preenchidos
  if (!username || !password) {
    res.status(401).json({ success: false, error: "Todos os campos são obrigatórios!" });
    return;
  }

  // Cria uma varável com a senha do usuário criptografada
  const hashPassword = await bcrypt.hash(password, 15);

  try {
    // Cria uma variável que armazena o "Username" digitado pelo usuário
    const usernameExists = await prisma.userAdmin.findUnique({ where: { username } });

    // Verifica se o "Username" digitado pelo usuário existe
    if (usernameExists) {
      res.status(401).json({ success: false, error: "Este username já foi cadastrado!" });
      return;
    }

    // Cria uma variável que armazena os dados da conta criada pelo usuário
    const user = await prisma.userAdmin.create({
      data: {
        username,
        password: hashPassword
      }
    })

    // Retorna "status 200" para quando tudo der certo
    res.status(200).json({ success: true, message: "Usuário cadastrado com sucesso", user });

  } catch (err) {
    // Retorna "status 500" para quando algum erro no servidor for encontrado, e exibe esse erro no console
    console.error("Erro ao cadastrar usuário o usuário: ", err);
    res.status(500).json({ success: false, error: "Ocorreu um erro interno no servidor! Tente novamente mais tarde!" });
  }
}

// Cria uma função que loga o usuário gerando um token
export const signIn = async (req: Request, res: Response): Promise<void> => {
  // Cria uma variável que armazena os dados do usuário
  const { username, password }: BodyRequestSignIn = req.body;

  // Verifica se todos os campos obrigatórios foram preenchidos
  if (!username || !password) {
    res.status(401).json({ success: false, error: "Todos os campos são obrigatórios!" });
    return;
  }


  try {
    // Cria uma variável que armazena o "Username" digitado pelo usuário
    const userExists = await prisma.userAdmin.findUnique({ where: { username } });

    // Verifica se o "Username" digitado pelo usuário existe
    if (!userExists) {
      res.status(401).json({ success: false, error: "Credenciais inválidas!" });
      return;
    }

    // Cria uma variável que compara a senha digitada pelo usuário com a senha do banco de dados
    const passwordMatch = userExists && await bcrypt.compare(password, userExists.password);

    // Verifica se a senha digitada pelo usuário está correta
    if (!passwordMatch) {
      res.status(401).json({ success: false, error: "Credenciais Inválidas!" });
      return;
    }

    // Cria um token para o usuário quando o login for bem sucedido
    const token = jwt.sign({ id: userExists.id }, JWT_SECRET, { expiresIn: "1h" });

    // Retorna "status 200" para quando tudo der certo
    res.status(200).json({ success: true, message: "Usuário logado com sucesso!", token });

  } catch (err) {
    // Retorna "status 500" para quando algum erro no servidor for encontrado, e exibe esse erro no console
    console.error("Ocorreu um erro ao fazer o SignIn: ", err);
    res.status(500).json({ success: false, error: "Ocorreu um erro interno no servidor! Tente novamente mais tarde" });
  }
}
