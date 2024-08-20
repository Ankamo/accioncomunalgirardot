import express from 'express';
import morgan from 'morgan';
import path from 'path';

const app = express();

// Configuración de Morgan para logging
app.use(morgan('dev'));

// Configuración de EJS como motor de plantillas
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Configuración de archivos estáticos
app.use(express.static(path.join(__dirname, 'public')));

// Rutas básicas
app.get('/', (req, res) => {
    res.render('index', { title: 'Inicio' });
});

app.get('/about', (req, res) => {
    res.render('about', { title: 'Acerca de' });
});

export default app;
