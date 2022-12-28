import {
    BaseEntity,
    Column,
    Entity,
    PrimaryColumn,
    PrimaryGeneratedColumn,
} from "typeorm";
import { IsEmail, IsNotEmpty } from "class-validator";

//TODO: userAddresi kaydederken toLowerCase ile kaydedilmeli
@Entity()
export class User extends BaseEntity {
    @PrimaryColumn()
    id: string;
    @Column({ unique: true, name: "address" })
    userAddress: string;
}

@Entity()
export class Req {
    @PrimaryGeneratedColumn("uuid")
    id: string;
    @Column({ nullable: true })
    name?: string;
}
