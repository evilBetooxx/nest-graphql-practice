import { Args, Resolver } from '@nestjs/graphql';
import { PostsService } from './posts.service';
import { Query, Mutation } from '@nestjs/graphql';
import { Post } from './post.entity';
import { CreatePostInput } from './dto/create.post.input';


@Resolver()
export class PostsResolver {
    constructor(private postService: PostsService){}

    @Query((returns) => [Post])
    posts() {
        return this.postService.findAll()
    }

    @Mutation((returns) => Post)
    createPost(@Args('postInput') postInput: CreatePostInput) {
        return this.postService.createPost(postInput)
    }
}
