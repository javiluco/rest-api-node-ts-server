import  express  from "express";
import colors from 'colors';
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

const server = express()

server.use('/api/products', router);

export default server;