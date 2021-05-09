import express, { Application } from "express";
import bodyParser from "body-parser";
import cors from "cors";
import compression from "compression";
import helmet from "helmet";

// import routes
import UserRoutes from "./api/v1/users/UserRoutes";


class App {
    public app: Application

    constructor(){
        this.app = express();
        this.plugin();
        this.routes();

    }

    protected plugin(): void {
        this.app.use(bodyParser.json());
        this.app.use(cors());
        this.app.use(compression());
        this.app.use(helmet());
    }    

    protected routes(): void {
        this.app.route("/").get(function(req,res){
            res.send("HEllo");
        });

        this.app.use("/api/v1/users", UserRoutes);
    }
}


const app = new App().app;

app.listen(8000);