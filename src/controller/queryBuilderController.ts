import { TBL_QUERRY_18 } from "../entity/queryBuilderEntity"
import { Request, Response } from "express"
import * as express from "express"
import { AppDataSource } from "../data-source"
import { InsertQueryBuilder } from "typeorm"

export class queryBuilderController {
    constructor() {
        AppDataSource.initialize().then(async () => {
            console.log("database connects")
        })
    }
    //inserting into tables...
    public insertQueryBuilder = async (req: Request, res: Response) => {
        console.log("performing insert querry")
        const { firstname, lastname, Age } = req.body;
        console.log(req.body)
        if (!firstname || !lastname || !Age) {
            res.status(200).json(
                { message: "All fileds required" }
            )
        }
        const data = await AppDataSource.manager
            .createQueryBuilder()
            .insert()
            .into(TBL_QUERRY_18)
            .values([{ firstName: firstname, lastName: lastname, Age: Age }])
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

    // displaying record 
    public selectQuery = async (req: Request, res: Response) => {
        console.log("performaing select querry");
        const dataselect = await AppDataSource.manager
            .createQueryBuilder(TBL_QUERRY_18, "user")
            .getMany()
        if (!dataselect) {
            res.status(203).json({
                message: "failed to select"
            })
        }
        else {
            res.status(200).json({
                message: "sucess", dataselect
            })
        }
    }
    // selecting spectfic record from database
    public specificRecord = async (req: Request, res: Response) => {
        console.log("selecting by id");
        const { id } = req.body;
        console.log(req.body)
        if (!id) {
            res.status(203).json({
                message: "id not found"
            })
        }
        const user = await AppDataSource.manager
            .createQueryBuilder(TBL_QUERRY_18, "user")
            .where("user.id = :id", { id: id })
            .getOne()
        if (!user) {
            res.status(203).json({
                message: "someting went wrongs"
            })
        }
        else {
            res.status(200).json({
                message: "id", user
            })
        }
    }

    //update query
    public updateQuerry = async (req: Request, res: Response) => {
        console.log("updating id ");
        const { id, firstname, lastname } = req.body;
        console.log(req.body)
        const updatedata = await AppDataSource.manager
            .createQueryBuilder()
            .update(TBL_QUERRY_18)
            .set({ firstName: firstname, lastName: lastname })
            .where("id = :id", { id: id })
            .execute()
        if (!updatedata) {
            res.status(200).json({
                message: " failed "
            })
        }
        else {
            res.status(203).json({
                message: "update "
            })
        }
    }

    // delete querry
    public deletequerry = async (req: Request, res: Response) => {
        const { id } = req.body;
        console.log(req.body)
        if (!id) {
            res.status(203).json({
                message: "id not found"
            })
        }
        const deletedata = await AppDataSource.manager
            .createQueryBuilder()
            .delete()
            .from(TBL_QUERRY_18)
            .where("id = :id", { id: id })
            .execute()
        if (!deletedata) {
            res.status(203).json({
                message: "record not deleted"
            })
        }
        else {
            res.status(200).json({
                message: "record deleted sucessfully", deletedata
            })
        }
    }

}



