import express,{Request, Response} from 'express';

const api = express();
const port = 3000;

//Endpoints
api.get('/',(req:Request, res:Response) => {
    res.send('Hello World!')
});





//Configuração de porta da API
api.listen(port, ()=> {
    console.log(`Running on Port ${port}`);
})