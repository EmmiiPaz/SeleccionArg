import express, {Request, Response} from 'express';
import path from 'path'
import { Arquero } from './Jugadores/Arquero';

const PORT = 5005;
const app = express();

// JUGADORES
const a1 = new Arquero("Dibu", "Martinez",28,"WestHam" )
const a2= new Arquero("Franco","Armani", 32, "River")
const a3= new Arquero("Geronimo","Rulli", 30, "Villareal")
const a4= new Arquero("Agustin","Rossi", 28, "Boke")

const listaArqueros= [a1,a2,a3,a4]

// ////////////////////////////////
app.use(express.json());
app.use(express.urlencoded( {extended: true}));

app.set('views', path.join(__dirname, '..', 'views'));
app.set('view engine', 'ejs');

app.get('/', (req: Request, res: Response) =>{
    res.render('pages/home')
});

app.get('/arqueros', (req: Request, res: Response) =>{

    res.render('pages/jugadores/arqueros', {arqueros: listaArqueros})
});

app.get('/arqueros/entrenar/:nombre', (req: Request, res: Response) =>{


    res.render('pages/jugadores/entrenar', {nombre: req.params.nombre})
});



app.listen(PORT, () => {
    console.log(`Ejecutando en el puerto:  ${PORT}`)
  })