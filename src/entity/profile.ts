import { Entity, PrimaryGeneratedColumn, Column } from "typeorm"
@Entity()
export class TBL_ONE_18 {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    gender: string

    @Column()
    photo: string
}