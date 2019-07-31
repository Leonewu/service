import {Column, Entity, PrimaryGeneratedColumn} from "typeorm"

@Entity()
export class User {

    @PrimaryGeneratedColumn()
    private id: number

    @Column()
    private name: string

    @Column()
    private temperament: string

    @Column()
    private lifeSpan: string

    @Column()
    private altNames: string

    @Column()
    private wikipediaUrl: string

    @Column()
    private origin: string

    @Column()
    private weightImperial: string

    @Column()
    private experimental: number

    @Column()
    private hairless: number

    @Column()
    private natural: number

    @Column()
    private rare: number

    @Column()
    private rex: number

    @Column()
    private suppressTail: number

    @Column()
    private shortLegs: number

    @Column()
    private hypoallergenic: number

    @Column()
    private adaptability: number

    @Column()
    private affectionLevel: number

    @Column()
    private countryCode: string

    @Column()
    private childFriendly: number

    @Column()
    private dogFriendly: number

    @Column()
    private energyLevel: number

    @Column()
    private grooming: number

    @Column()
    private healthIssues: number

    @Column()
    private intelligence: number

    @Column()
    private sheddingLevel: number

    @Column()
    private socialNeeds: number

    @Column()
    private strangerFriendly: number

    @Column()
    private vocalisation: number

}
