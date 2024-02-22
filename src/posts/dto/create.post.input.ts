import { Field, InputType } from "@nestjs/graphql"
import { IsInt, IsNotEmpty } from "class-validator";

@InputType()
export class CreatePostInput {
    @IsNotEmpty()
    @Field()
    title: string;

    @Field({nullable: true})
    content?: string;

    @IsInt()
    @Field()
    userId: number
}