import jwt from 'jsonwebtoken';

const JWT_SCRET = process.env.JWT_SECRET;

const auth = (req, res, next) => {

  const tokenBearer = req.headers.authorization;
  const token = tokenBearer.replace("Bearer ", "");

  if (!token) {
    return res.status(401).json({ message: "Acesso Negado!" });
  }

  try {
    const decoded = jwt.verify(token, JWT_SCRET);

    req.userId = decoded.id;
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Token Inválido!" });
  }

  next();
}

export default auth;
