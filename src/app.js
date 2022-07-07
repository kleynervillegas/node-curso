import express from "express";
import TasksRoutes from './routes/tasks/tasks.routes';
import config from './config/config';
import bodyParser from 'body-parser';
import morgan from 'morgan'
import cors from 'cors'

const jwt = require("jsonwebtoken");
const app = express();
// parse application/x-www-form-urlencoded
app.use(bodyParser.json({ type: 'application/*+json' }));

app.use(morgan('dev'));

//configurar permisos de servidor
const corsOption = {
    origin: 'http://localhost:3000'
}
// parse application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: false }))

app.use(cors());

// parse application/json
app.use(bodyParser.json());

app.set('port', config.port|| 3000);

app.get('/',(req,res) => {
    res.json({message: "hola"});
}); 

app.set('jwtSecret', config.jwtSecret); 

const payload = {
    check:  true,
    user: {
        name: 'kleyner villegas',
        numberid: '20096862',
    }
   };

   const token = jwt.sign(payload, app.get('jwtSecret'), {
    expiresIn: 1440
   });
   console.log(token);

app.use('/api/tasks',TasksRoutes);

export default app;