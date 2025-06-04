import User from '../models/User.js';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

const authController = {};

// REGISTRO
authController.register = async (req, res) => {
  const { username, password } = req.body;

  try {
    const exists = await User.findOne({ username });
    if (exists) return res.status(400).json({ message: 'El usuario ya existe' });

    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = new User({ username, password: hashedPassword });

    await newUser.save();
    res.status(201).json({ message: "Usuario registrado correctamente" });
  } catch (error) {
    res.status(500).json({ message: 'Error en el registro', error: error.message });
  }
};

// LOGIN
authController.login = async (req, res) => {
  const { username, password } = req.body;

  try {
    const user = await User.findOne({ username }); // <-- corregido aquí

    if (!user) return res.status(401).json({ message: "Credenciales inválidas" });

    const validPassword = await bcrypt.compare(password, user.password);
    if (!validPassword) return res.status(401).json({ message: "Contraseña incorrecta" });

    const token = jwt.sign({ id: user._id }, "secreto123", { expiresIn: '15m' });

    res.json({ token, user: { username: user.username } });
  } catch (error) {
    res.status(500).json({ message: "Error en el login", error: error.message });
  }
};

// MIDDLEWARE: verificar token
export const verifyToken = (req, res, next) => {
  const authHeader = req.headers.authorization;

  if (!authHeader) return res.status(401).json({ message: "Token no proporcionado" });

  const token = authHeader.split(" ")[1];

  try {
    const decoded = jwt.verify(token, "secreto123");
    req.user = decoded;
    next();
  } catch (error) {
    res.status(403).json({ message: "Token inválido" });
  }
};

export default authController;
