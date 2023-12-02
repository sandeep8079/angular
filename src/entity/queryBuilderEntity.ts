import { Entity, PrimaryGeneratedColumn, Column } from "typeorm"

@Entity()
export class TBL_QUERRY_18 {

    @PrimaryGeneratedColumn()
    id: number

    @Column()
    firstName: string

    @Column()
    lastName: string

    @Column()
    Age: number

}
