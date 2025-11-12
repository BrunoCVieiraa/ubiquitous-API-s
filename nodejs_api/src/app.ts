import express, { Request, Response } from 'express';
import cors from 'cors'


const app = express();

app.use(express.json(), cors({
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
}));

app.post("/users", (req: Request, res: Response) => {

});

app.get("/users", (req: Request, res: Response) => {
    
});

app.get("/users/:id", (req: Request, res: Response) => {
    
});

app.put("/users/:id", (req: Request, res: Response) => {
    
});

app.delete("/users/:id", (req: Request, res: Response) => {
    
});


export default app;




