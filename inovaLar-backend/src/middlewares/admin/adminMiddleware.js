import jwt from 'jsonwebtoken';

const JWT_SECRET = process.env.JWT_SECRET;

export const authAdmin = async (req, res, next) => {
  const tokenBearer = req.headers.authorization;
  const token = tokenBearer.replace("Bearer ", "");

  if (!token) {
    res.status(400).json("Acesso negado!");
  }

  try {
    const decoded = jwt.verify(token, JWT_SECRET);

    req.userId = decoded.id;
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Token Inválido!" });
  }

  next();
}
