import { Column, Entity, PrimaryGeneratedColumn} from "typeorm"

@Entity()
export class Permission {
    @PrimaryGeneratedColumn()
    public id: number

    @Column()
    public permission: string

    @Column()
    public state: boolean
}
