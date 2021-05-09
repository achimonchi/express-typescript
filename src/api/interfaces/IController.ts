import {Request, Response} from 'express';

interface IController {
    fetchAll(req: Request, res: Response): Response;
    fetchByID(req: Request, res: Response): Response;
    create(req: Request, res: Response): Response;
    update(req: Request, res: Response): Response;
    delete(req: Request, res: Response): Response;
}

export default IController;