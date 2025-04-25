import express from "express";
import cors from "cors";
import routesUserAdmin from "./routes/userAdmin";
import routerUserPublic from "./routes/userPublic";
import routerUserPublicGoogle from "./routes/userPublicGoogle";

console.log("Configurando aplicação...");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api", routesUserAdmin);
app.use("/api", routerUserPublic);
app.use("/api", routerUserPublicGoogle);

export default app;
