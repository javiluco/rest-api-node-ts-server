import {Router} from 'express';

const router = Router();
//Routing
router.get('/', (req, res)=>{
    res.send('Hola Mundo en Express')
})


export default router;