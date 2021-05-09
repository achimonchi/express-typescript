import {Request, Response} from 'express';
import IController from '../../interfaces/IController';

class UserController implements IController{
    fetchAll(req: Request, res: Response): Response{
        return res.status(200).json({
            method:"Fetch All",
            status:200
        })
    }

    fetchByID(req: Request, res: Response): Response{
        return res.status(200).json({
            method:"Fetch By ID",
            status:200,
        })
    }

    create(req: Request, res: Response): Response{
        return res.status(200).json({
            method:"Create User",
            status:200,
        })
    }

    update(req: Request, res: Response): Response{
        return res.status(200).json({
            method:"Update User",
            status:200,
        })
    }

    delete(req: Request, res: Response): Response{
        return res.status(200).json({
            method:"Delete User",
            status:200
        })
    }
}

export default UserController;