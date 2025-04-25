import app from "./app.ts";

console.log("Iniciando servidor...");

const PORT = process.env.PORT || 3001;

try {
  app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
  });
} catch (error) {
  console.error("Erro ao iniciar o servidor:", error);
}
