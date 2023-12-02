import "reflect-metadata"
import { DataSource } from "typeorm"

 
export const AppDataSource = new DataSource({
    type: "mssql",
    host: "dev.cpsodetaxlgn.ap-south-1.rds.amazonaws.com",
    port: 1982,
    username: "j2",
    password: "123456",
    database: "JIBE_Main_Training",
    entities: ["src/entity/*.ts"],
    synchronize: true,
    logging: false,
    migrations:[],
    subscribers:[],
    extra:{
        options:{
            encrypt:false,
            useUTC:true,
            enableArithAbort:true
        }
    }
})
 