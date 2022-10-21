import express,{Request, Response} from 'express';

const api = express();
const port = 5000;

//Endpoints
api.get('/',(req:Request, res:Response) => {
    res.send('Hello World! TESTE')
});





//Configuração de porta da API
api.listen(port, ()=> {
    console.log(`Running on Port ${port}`);
})