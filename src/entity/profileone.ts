import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    OneToOne,
    JoinColumn,
} from "typeorm"
//import the entity
import { TBL_ONE_18 } from "../entity/profile"

@Entity()
export class User_18 {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    name: string

    @OneToOne(() => TBL_ONE_18)
    @JoinColumn()
    profile: TBL_ONE_18
}