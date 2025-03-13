import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import router from "./routes";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

// Middlewares
app.use(cors());
app.use(express.json());

// Usando as rotas
app.use("/api", router);

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
