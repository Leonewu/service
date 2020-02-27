import {Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn} from "typeorm"

@Entity()
export default class Photo {

    @PrimaryGeneratedColumn()
    public id: number

    @Column()
    public name: string

    @Column()
    public folderId: number

    @Column()
    public url: string

    @CreateDateColumn()
    public createdAt: string

    @UpdateDateColumn()
    public updatedAt: string
}
