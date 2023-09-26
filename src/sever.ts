import "dotenv/config";
import 'express-async-errors';
import cors from 'cors';
import express, { NextFunction, Request, Response }  from 'express';
import { routes } from "./routes";
import { AppError } from "./errors/AppError";

const port = process.env.PORT;
const app = express();

app.use(cors());
app.use(express.json());

app.use(routes);

app.use((err: Error, request: Request, response: Response, nextFunction: NextFunction) => {
    if(err instanceof AppError){
        return response.status(err.statusCode).json({
            status: "Error",
            message: `Erro interno: ${err.message}`
        })
    }
});

app.listen(port, () => console.log(`running on ${port}`));

