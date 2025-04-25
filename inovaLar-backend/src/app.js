import express from 'express';
import cors from 'cors';

import authRoutes from './routes/auth.js';
import cartRoutes from './routes/cart.js';
import productRoutes from './routes/product.js';
import adminRoutes from './routes/admin.js';
import googleAuthRoutes from './routes/googleAuth.js';

const app = express();

app.use(express.json());
app.use(cors());
app.use("/", authRoutes);
app.use("/", cartRoutes);
app.use("/", productRoutes);
app.use("/", adminRoutes);
app.use("/", googleAuthRoutes);

export default app;
