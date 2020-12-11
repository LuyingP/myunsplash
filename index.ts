import express, { Application,Request,Response } from 'express';
import {searchPh} from "./app/unSplashApi"
const app: Application = express();
const port = process.env.PORT||3000;


app.get('/', async(req:Request,res:Response)=>{
    try{
        const result= await searchPh;
        res.json(result);
    }catch(erro){
       res.send(erro);
    }
   
});

app.listen(port, () => {
    
    return console.log(`server is listening on ${port}`);
});