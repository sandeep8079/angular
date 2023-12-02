import { Entity, PrimaryGeneratedColumn, Column } from "typeorm"

@Entity()
export class TBL_B_USER {

    @PrimaryGeneratedColumn("increment")
    id: number

    @Column()
    name: string

    @Column()
    email: string

    @Column()
    password: string

    @Column()
    mobile:string

    @Column()
    address:string

    @Column()
    userImage:string    


}
