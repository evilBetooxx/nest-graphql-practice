import { Args, Int, Parent, ResolveField, Resolver, Subscription } from '@nestjs/graphql';
import { PostsService } from './posts.service';
import { Query, Mutation } from '@nestjs/graphql';
import { Post } from './entities/post.entity';
import { CreatePostInput } from './dto/create.post.input';
import { User } from 'src/users/entities/user.entity';


@Resolver((of) => Post)
export class PostsResolver {
    constructor(private postService: PostsService){}

    @Query((returns) => [Post])
    posts() {
        return this.postService.findAll()
    }

    @Query((returns) => Post)
    post(@Args('id', { type: () => Int}) id: number){
        return this.postService.findProductById(id)
    }

    @ResolveField((returns) => User)
    user(@Parent() post: Post): Promise<User>{
        return this.postService.getUser(post.userId)
    }

    @Mutation((returns) => Post)
    createPost(@Args('postInput') postInput: CreatePostInput) {
        return this.postService.createPost(postInput)
    }

    @Subscription((returns) => Post, {})
    postAdded() {
        return this.postService.postAdded()
    }
}
