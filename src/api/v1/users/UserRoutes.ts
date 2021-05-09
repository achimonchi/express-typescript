import {Router, Request, Response} from "express";
import IRouter from "../../interfaces/IRouter";
import UserController from "./UserController";


class UserRoutes implements IRouter {
    public router: Router;
    private userController: UserController;

    constructor(){
        this.router = Router();
        this.userController = new UserController();
        this.routes();
    }

    public routes(): void {
        this.router.get("/", this.userController.fetchAll);
        this.router.get("/:id", this.userController.fetchAll);

        this.router.post("/", this.userController.create);
        this.router.put("/:id", this.userController.update);
        this.router.delete("/:id", this.userController.delete);
    }
}

export default new UserRoutes().router;