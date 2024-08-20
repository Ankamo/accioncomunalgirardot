import { Router } from "express";

const router = Router();

// Ruta principal
router.get("/", (req, res) => {
    res.render("index", { title: "Inicio" });
});

// Ruta: cartelera 
router.get("/cartelera", (req, res) => {
    res.render("cartelera-comunal", { title: "Cartelera Comunal" });
});

// Ruta: eventos 
router.get("/eventos", (req, res) => {
    res.render("eventos", { title: "Eventos y Actividades" });
});

// Ruta: reuniones 
router.get("/reuniones", (req, res) => {
    res.render("reuniones", { title: "Reuniones y Asambleas" });
});

// Ruta: oac registradas 
router.get("/oac", (req, res) => {
    res.render("oac", { title: "OAC Registradas" });
});

// Ruta: afiliados 
router.get("/afiliados", (req, res) => {
    res.render("afiliados", { title: "Afiliados" });
});

// Ruta: proyectos 
router.get("/proyectos", (req, res) => {
    res.render("proyectos", { title: "Proyectos" });
});

// Ruta: servicios 
router.get("/servicios", (req, res) => {
    res.render("servicios-comunales", { title: "Servicios Comunales" });
});

// Ruta: quienes somos 
router.get("/quienes", (req, res) => {
    res.render("quienes-somos", { title: "Quiénes Somos" });
});

// Ruta: ingresar 
router.get("/ingresar", (req, res) => {
    res.render("ingresar", { title: "Ingresar" });
});

export default router;