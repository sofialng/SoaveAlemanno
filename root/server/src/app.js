import express from 'express';
import cors from 'cors';
import healthRoutes from './routes/health.routes.js';
import emailRoutes from './routes/email.routes.js';

const app = express();

// Middlewares globali
// app.use(cors());
app.use(express.json());
app.use(cors({
  origin: "http://localhost:5173",
  credentials: true
}));

// Routes
console.log("🔥 APP LOADED");
app.use('/api/health', healthRoutes);
app.use('/api/contact', emailRoutes);
app.use('/', (req, res) => {
  res.send('Welcome to the Soave Alemanno API!');
});

export default app;
