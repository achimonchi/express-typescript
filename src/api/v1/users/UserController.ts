import { Request, Response } from "express";
import IController from "./IController";
import UserDto from "./User.dto";

const db = require("../../../db/models/index.js");

// implements IController
class UserController implements IController {
    public findAll = async (req: Request, res: Response): Promise<Response> => {
        try {
            const {limit, page} = req.query;

            let limitData: number = 5;
            let pageData: number = 0;

            // cek apakah ada query limit atau tidak
            if(limit){
                limitData = +limit;
            }

            // cek apakah ada query page atau tidak
            if(page){
                pageData = +page;
            }

            const offset: number = (limitData * pageData);

            const users = await db.user.findAndCountAll({limit: limitData, offset: offset});

            if(users.rows.length === 0){
                return Promise.resolve(res.send({status: 404, msg: "There is no data !"}));    
            }

            let data = {
                limit:limitData, 
                page: pageData,
                count : users.count,
                users: users.rows
            }

            return Promise.resolve(res.send(
                {
                    status: 200, 
                    data
                }
            ));
        } catch (error) {
            return Promise.resolve(res.send({
                status: 500,
                msg : "There is something wrong !"
            }));
        }
    };
    public findByID = async(req: Request, res: Response): Promise<Response> => {
        try {
            const {id} = req.params;

            if(!id){
                return Promise.resolve(res.send({status: 400, msg:"Provide the id User"}));
            }

            const idUser: number = +id;
            if(isNaN(idUser)){
                return Promise.resolve(res.send({
                    status : 400,
                    msg : "ID must be integer"
                }));    
            }

            const user = await db.user.findByPk(idUser);
            if(user){
                return Promise.resolve(res.send({
                    status : 200,
                    data : user
                }));
            } else {
                return Promise.resolve(res.send({
                    status: 404,
                    msg : "There is no data with this ID !"
                }));
            }

        } catch (error) {
            // console.log(error)
            return Promise.resolve(res.send({
                status : 500,
                msg : error
            }));
        }
    };

    public create = async (req: Request, res: Response): Promise<Response> => {
        try {
            const {fullname, majors, email} = req.body;

            const user = new UserDto(email, fullname, majors);

            let validate: object = {flag:false};

            validate = user.validate();

            if(validate.flag === false){
                let data = { 
                    status: 400,
                    msg : validate.msg
                }
                return Promise.resolve(res.send(data));
            }

            const createdUser = await db.user.create(user);
            
            if(createdUser){
                let data = {
                    status : 201,
                    msg: "User created !",
                    data : createdUser
                }
                return Promise.resolve(res.send(createdUser));
            } else {
                let data = {
                    status : 400,
                    msg : "User fail to create !"
                };
                return Promise.resolve(res.send(data));
            }
        } catch (error) {
            let data = {
                status : 500,
                msg : error
            };
            console.log(error)
            return Promise.resolve(res.send(data));
        }

    }; 

    public update = async(req: Request, res: Response): Promise<Response> => {
        try {
            const {id} = req.params;
            if(!id){
                return Promise.resolve(res.send({status: 400, msg:"Provide the id User"}));
            }

            const idUser = +id;

            if(isNaN(idUser)){
                return Promise.resolve(res.send({
                    status : 400,
                    msg : "ID must be integer"
                }));    
            }

            const {fullname, majors, email} = req.body;

            const user = new UserDto(email, fullname, majors);

            let validate: object = {flag:false};

            validate = user.validate();

            if(validate.flag === false){
                let data = { 
                    status: 400,
                    msg : validate.msg
                }
                return Promise.resolve(res.send(data));
            }

            const isExist = await db.user.findByPk(idUser);
            if(!isExist){
                return Promise.resolve(res.send({
                    status : 404,
                    msg : "There is no data !"
                }));    
            }

            const updated = await db.user.update(user, {where: {id : idUser} });
            if(updated){
                return Promise.resolve(res.send({
                    status: 200,
                    msg :"Update success !",
                    data : user
                }));
            } else {
                return Promise.resolve(res.send({
                    status: 400,
                    msg :"Update fail",
                }));
            }
            
        } catch (error) {
            return Promise.resolve(res.send({
                status: 500,
                msg :error,
            }));
        }
        
    };

    public delete = async(req: Request, res: Response): Promise<Response> => {
        try {
            const {id} = req.params;
            if(!id){
                return Promise.resolve(res.send({status: 400, msg:"Provide the id User"}));
            }

            const idUser = +id;

            if(isNaN(idUser)){
                return Promise.resolve(res.send({
                    status : 400,
                    msg : "ID must be integer"
                }));    
            }

            const isExist = await db.user.findByPk(idUser);

            if(!isExist){
                return Promise.resolve(res.send({
                    status : 404,
                    msg : "There is no data !"
                }));    
            }

            const deleteData = await db.user.destroy({where: {id:idUser}});
            
            if(deleteData){
                return Promise.resolve(res.send({
                    status: 200,
                    msg :"Delete success !",
                }));
            } else {
                return Promise.resolve(res.send({
                    status: 400,
                    msg :"Delete fail",
                }));
            }
        } catch (error) {
            return Promise.resolve(res.send({
                status: 500,
                msg :"There is something error",
            }));
            
        }
    };
}

export default UserController;