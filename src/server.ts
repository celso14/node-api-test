import express,{Request, Response} from 'express';
import { questions } from './controllers/question';

const api = express();
const port = 5000;

//Endpoints
api.get('/',(req:Request, res:Response) => {
    res.send('Hello World! TESTE teste 3');
});

api.get('/questions', questions);




//Configuração de porta da API
api.listen(port, ()=> {
    console.log(`Running on Port ${port}`);
})