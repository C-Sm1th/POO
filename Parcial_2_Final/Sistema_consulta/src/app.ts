import express from "express";
import consultaRoutes from "./routes/consultaRoutes";

const app = express();

app.use(express.json());
app.use("/consultas", consultaRoutes);

app.listen(3000, () => {
    console.log("Servidor corriendo en puerto 3000");
});