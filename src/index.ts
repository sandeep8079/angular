import "reflect-metadata";
 
import { Request, Response } from "express";
 
import * as express from "express";
 
import * as cors from 'cors'
 
import * as bodyParser from "body-parser";
 
const app = express()
 
app.use(cors());
 
app.use(express.json());
 
app.use(express.urlencoded({extended:true}))
 
const port = 4000;
 
app.use('/api/querybuilder',require('./routes/queryBuilderRoute'))
app.use('/api/relation',require('./routes/relationRoutes'))
 
app.listen(port, () => console.log(`Api is Running on port ${port}`));