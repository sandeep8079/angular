import * as  express from "express"

import { Request, Response } from "express"

const  router = express.Router()

//importing the controller class
import {relationquerry} from "../controller/relationController"

// creating the object of controller class
const query = new relationquerry();

//query routes

router.post('/insertQuery',(req:Request,res:Response)=>query.insertQueryprofile(req,res));
router.post('/one_to_one',(req:Request,res:Response)=>query.one_to_one(req,res));

module.exports = router;