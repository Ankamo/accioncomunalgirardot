import express from "express";
import morgan from "morgan";
import { join, dirname } from "path";
import { fileURLToPath } from "url";

// Rutas
import indexRoutes from "./src/routes/rutas.js"; // Importa las rutas

// Inicializa express
const app = express();
const __dirname = dirname(fileURLToPath(import.meta.url));

// Configuración
app.set("port", process.env.PORT || 4000);
app.set("views", join(__dirname, "views"));
app.set("view engine", "ejs");

// Middlewares
app.use(morgan("dev"));

// Rutas
app.use(indexRoutes);

// Archivos estáticos
app.use(express.static(join(__dirname, "public")));

// Inicia el servidor
app.listen(app.get("port"), () => {
    console.log("Server on port", app.get("port"));
});
