import {Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn} from "typeorm"

@Entity()
export default class User {

    @PrimaryGeneratedColumn()
    public id: number

    @Column({default: ""})
    public nickname: string

    @Column()
    public openId: string

    @Column({ type: "varchar", length: 11, default: ""})
    public phone: string

    @CreateDateColumn()
    public createdAt: string

    @UpdateDateColumn()
    public updatedAt: string
}
