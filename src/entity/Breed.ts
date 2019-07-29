import {Entity, PrimaryGeneratedColumn, Column} from "typeorm";

@Entity()
export class User {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    temperament: string;

    @Column()
    life_span: string;

    @Column()
    alt_names: string;

    @Column()
    wikipedia_url: string;

    @Column()
    origin: string;

    @Column()
    weight_imperial: string;

    @Column()
    experimental: number;

    @Column()
    hairless: number;

    @Column()
    natural: number;

    @Column()
    rare: number;

    @Column()
    rex: number;

    @Column()
    suppress_tail: number;

    @Column()
    short_legs: number;

    @Column()
    hypoallergenic: number;

    @Column()
    adaptability: number;

    @Column()
    affection_level: number;

    @Column()
    country_code: string;
    
    @Column()
    child_friendly: number;

    @Column()
    dog_friendly: number;

    @Column()
    energy_level: number;

    @Column()
    grooming: number;

    @Column()
    health_issues: number;

    @Column()
    intelligence: number;

    @Column()
    shedding_level: number;

    @Column()
    social_needs: number;

    @Column()
    stranger_friendly: number;

    @Column()
    vocalisation: number;

}
