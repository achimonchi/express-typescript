import express, { Application, Request, Response } from "express";
import bodyParser from "body-parser";
import cors from "cors";
import helmet from "helmet";
import compression from "compression";

// import routes
import UserRoutes from "./api/v1/users/UserRoutes";

class App {
    public app: Application;

    constructor(){
        this.app = express();
        this.plugins();
        this.routes();
    }

    protected plugins(): void{
        this.app.use(bodyParser.json());
        this.app.use(helmet());
        this.app.use(cors());
        this.app.use(compression());
    }

    protected routes(): void { 
        this.app.use("/api/v1/users", UserRoutes);
    }
}

const port: number = 8000;
const app = new App().app;

app.listen(port, ()=>{
    console.log(`Running at port ${port}`)
});