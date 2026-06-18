import express from "express";
import usuarioRoutes from "./routes/usuarioRoutes";

const app = express();

app.use(express.json());

app.use("/usuarios", usuarioRoutes);

app.listen(3000, () => {
    console.log("Servidor corriendo en puerto 3000");
});