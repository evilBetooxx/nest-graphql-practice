import { Injectable } from '@nestjs/common';
import { Post } from './post.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreatePostInput } from './dto/create.post.input';

@Injectable()
export class PostsService {

    constructor(@InjectRepository(Post) private postsRepository: Repository<Post>){}

    async findAll(): Promise<Post[]> {
        return await this.postsRepository.find()
    }

    async createPost(post: CreatePostInput ): Promise<Post>{
        const newPost = await this.postsRepository.create(post)
        return this.postsRepository.save(newPost)
    }
}
