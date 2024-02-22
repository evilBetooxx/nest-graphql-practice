import { ObjectType, Field, Int } from "@nestjs/graphql"
import { User } from "src/users/entities/user.entity"
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm"

@Entity()
@ObjectType()
export class Post {

    @PrimaryGeneratedColumn()
    @Field((type) => Int)
    id: number

    @Column()
    @Field()
    title: string

    @Column({type: 'text', nullable: true})
    @Field({nullable: true})
    content?: string

    @Column()
    @Field(() => Int)
    userId: number

    @ManyToOne(() => User, user => user.posts)
    @Field(() => User)
    user: User
}