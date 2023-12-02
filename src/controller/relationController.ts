
import{TBL_ONE_18} from "../entity/profile"
import{User_18} from "../entity/profileone"
import { Request, Response } from "express"
import * as express from "express"
import { AppDataSource } from "../data-source"
import { InsertQueryBuilder } from "typeorm"

export class relationquerry {

    constructor(){
        AppDataSource.initialize().then(async () => {

            // console.log("database connects")
        })

    }

    //inserting in table profile
    public insertQueryprofile = async (req: Request, res: Response) => {

        console.log("performing insert querry")

        const { gender, photo } = req.body;

        console.log(req.body)

        if (!gender || !photo) {
            res.status(200).json(
                { message: "All fileds required" }
            )
        }

        const data = await AppDataSource.manager
            .createQueryBuilder()
            .insert()
            .into(TBL_ONE_18)
            .values([{ gender: gender, photo: photo }])
            .execute()

        if (!data) {
            res.status(203).json({
                message: "something went wrongs"
            })
        }
        else {
            res.status(200).json({
                message: "data inserted successfully"
            })
        }

    }

    public one_to_one=async(req:Request,res:Response)=>{
   
        const{gender,photo,name}=req.body
        const user = new TBL_ONE_18()
        user.gender = gender       
        user.photo = photo

        AppDataSource.manager.save(user)
        console.log('record added ')
        console.log('All user',user)
     
        const newEmployee=new User_18()
        newEmployee.name=name
        newEmployee.profile=user
        
        AppDataSource.manager.save(newEmployee)
        console.log('all employee wuth one to one relation',newEmployee)
        res.status(201).json(newEmployee)
        }

}