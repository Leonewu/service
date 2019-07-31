import {Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn} from "typeorm"

@Entity()
export default class Folder {

    @PrimaryGeneratedColumn()
    public id: number

    @Column()
    public name: string

    @Column()
    public parentId: number

    @Column({default: 0})
    public rootId: number

    @Column({default: null})
    public ownerType: string

    @Column({default: 0})
    public ownerId: number

    @Column({default: ""})
    public sn: string

    @CreateDateColumn()
    public createdAt: string

    @UpdateDateColumn()
    public updatedAt: string
}
