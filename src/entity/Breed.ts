import {Column, Entity, PrimaryGeneratedColumn} from "typeorm"

@Entity()
export class User {

    @PrimaryGeneratedColumn()
    private id: number

    @Column()
    private name: string

    @Column()
    private temperament: string

    @Column({name: "life_span"})
    private lifeSpan: string

    @Column({name: "alt_names"})
    private altNames: string

    @Column({name: "wikipedia_url"})
    private wikipediaUrl: string

    @Column()
    private origin: string

    @Column({name: "weight_imperial"})
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

    @Column({name: "suppress_tail"})
    private suppressTail: number

    @Column({name: "short_legs"})
    private shortLegs: number

    @Column()
    private hypoallergenic: number

    @Column()
    private adaptability: number

    @Column({name: "affection_level"})
    private affectionLevel: number

    @Column({name: "country_code"})
    private countryCode: string

    @Column({name: "child_friendly"})
    private childFriendly: number

    @Column({name: "dog_friendly"})
    private dogFriendly: number

    @Column({name: "energy_level"})
    private energyLevel: number

    @Column()
    private grooming: number

    @Column({name: "health_issues"})
    private healthIssues: number

    @Column()
    private intelligence: number

    @Column({name: "shedding_level"})
    private sheddingLevel: number

    @Column({name: "social_needs"})
    private socialNeeds: number

    @Column({name: "stranger_friendly"})
    private strangerFriendly: number

    @Column()
    private vocalisation: number

}
