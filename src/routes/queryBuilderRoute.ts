import * as  express from "express"

import { Request, Response } from "express"

const  router = express.Router()

//importing the controller class
import {queryBuilderController} from "../controller/queryBuilderController"

// creating the object of controller class
const query = new queryBuilderController();

//query routes

router.post('/insertQuery',(req:Request,res:Response)=>query.insertQueryBuilder(req,res));
router.post('/selectQuery',(req:Request,res:Response)=>query.selectQuery(req,res));
router.get('/specificRecord',(req:Request,res:Response)=>query.specificRecord(req,res));
router.put('/updateQuerry',(req:Request,res:Response)=>query.updateQuerry(req,res));
router.delete('/deletequerry',(req:Request,res:Response)=>query.deletequerry(req,res))
module.exports = router;