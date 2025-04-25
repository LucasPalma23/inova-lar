import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";

// Cria uma variável que armazena minha chave secreta do JWT (jsonwebtoken) chamando ela do meu ".env"
const JWT_SECRET = process.env.JWT_SECRET;

// Verifica se existe uma variável com nome e valores dentro do meu ".env"
if (!JWT_SECRET) throw Error("Chave secreta do JWT não encontrada!");

// Cria uma interface para o meu Request declarando o userId como "String"
interface CustomRequest extends Request {
  userId?: string;
}

export const verifyAuthAdmin = async (req: CustomRequest, res: Response, next: NextFunction): Promise<void> => {
  // Cria a variável que recebe o token do usuário
  const tokenBearer = req.headers.authorization;

  // Remove o prefixo "Bearer " do token
  const token = tokenBearer?.replace("Bearer ", "");

  // Verifica se o token foi enviado no cabeçalho
  if (!token) {
    res.status(400).json({ success: false, error: "Token não encontrado!" });
    return;
  }

  try {
    // Verifica e decodifica o token
    const decoded = jwt.verify(token, JWT_SECRET) as jwt.JwtPayload;

    // Verifica se o token contém o campo "id"
    if (!decoded.id) {
      res.status(400).json({ success: false, error: "Token inválido!" });
      return;
    }

    // Adiciona o ID do usuário ao objeto de requisição
    req.userId = decoded.id;

    next();
  } catch (err) {
    // Trata erros específicos do JWT
    if (err instanceof jwt.TokenExpiredError) {
      res.status(400).json({ success: false, error: "Token Expirado!" });
      return;
    } else if (err instanceof jwt.JsonWebTokenError) {
      res.status(400).json({ success: false, error: "Token Inválido!" });
      return
    } else {
      console.error("Ocorreu um erro ao validar o token: ", err);
      res.status(500).json({ success: false, error: "Ocorreu um erro interno no servidor! Tente novamente mais tarde!" });
    }
  }
}
