import express, {Request, Response, Router} from "express";

import IRoutes from "../../interfaces/IRoutes";
import UserController from "./UserController";


class UserRoutes implements IRoutes {
    public router: Router;
    public controller: UserController;

    constructor(){
        this.router = Router();
        this.controller = new UserController();
        this.routes();
    }


    public routes(): void{
        this.router.get("/", this.controller.findAll);
        this.router.get("/:id", this.controller.findByID);
        
        this.router.post("/", this.controller.create);
        this.router.put("/:id", this.controller.update);
        this.router.delete("/:id", this.controller.delete);
    }
}

export default new UserRoutes().router;