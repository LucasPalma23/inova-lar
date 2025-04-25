import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";

const JWT_SECRET = process.env.JWT_SECRET;

if (!JWT_SECRET) throw Error("Chave JWT não encontrada!");

interface CustomRequest extends Request {
  userId?: string;
}

export const validationTokenAuthPublic = async (req: CustomRequest, res: Response, next: NextFunction): Promise<void> => {
  const tokenBearer = req.headers.authorization;

  const token = tokenBearer?.replace("Bearer ", "");

  if (!token) {
    res.status(400).json({ success: false, error: "Token não encontrado!" });
    return;
  }

  try {

    const decoded = jwt.verify(token, JWT_SECRET) as jwt.JwtPayload;

    req.userId = decoded.id;

    next();
  } catch (err) {
    if (err instanceof jwt.TokenExpiredError) {
      res.status(400).json({ success: false, error: "Token Expirado!" });
      return;
    } else if (err instanceof jwt.JsonWebTokenError) {
      res.status(400).json({ success: false, error: "Token Inválido!" });
      return;
    } else {
      console.error("Ocorreu um erro ao validar o token: ", err);
      res.status(500).json({ success: false, error: "Ocorreu um erro interno no servidor! Tente novamente mais tarde!" });
    }
  }
}
