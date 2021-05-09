import { Request, Response } from "express";


interface IController {
    findAll(req: Request, res: Response): Promise<Response>;
    findByID(req: Request, res: Response): Promise<Response>;

    create(req: Request, res: Response): Promise<Response>;
    update(req: Request, res: Response): Promise<Response>;
    delete(req: Request, res: Response): Promise<Response>;
}

export default IController;