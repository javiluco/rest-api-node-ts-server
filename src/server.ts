import  express  from "express";
import colors from 'colors';
import cors, { CorsOptions } from 'cors';
import morgan from 'morgan';
import router from './router';
import db from "./config/db";


//Conectar a base de datos
async function connectDB(){
    try {
        await db.authenticate(); //Nos autenticamos a nuestra base de datos
        db.sync();// En caso de ir creando nuevos modelos o columnas en nuestra BD, las ira agregando
        console.log(colors.magenta('Conexión exitosa a la DB'));
        
    } catch (error) {
        console.log(error);
        console.log(colors.bgRed.white('Hubo un error al conectar a la BD'));
    }
}
connectDB();

//Instancia de express
const server = express();

//Permitir conexiones 
const corsOptions : CorsOptions = {
    origin: function(origin, callback){
        console.log(origin);
        if(origin === process.env.FRONTED_URL, process.env.API_URL){
            callback(null, true);
        } else {
            callback(new Error('Error de CORS'));
        }
    }
}
server.use( cors(corsOptions) );
//Leer datos de formularios
server.use(express.json());

server.use(morgan('dev'));

server.use('/api/products', router);

export default server;
