import { Injectable } from '@nestjs/common';
import { Post } from './entities/post.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreatePostInput } from './dto/create.post.input';
import { User } from 'src/users/entities/user.entity';
import { UsersService } from 'src/users/users.service';

@Injectable()
export class PostsService {
  constructor(
    @InjectRepository(Post)
    private postsRepository: Repository<Post>,
    private userService: UsersService,
  ) {}

  async findAll(): Promise<Post[]> {
    return await this.postsRepository.find();
  }

  async findProductById(id: number): Promise<Post> {
    return await this.postsRepository.findOne({
      where: {
        id: id,
      },
    });
  }

  async createPost(post: CreatePostInput): Promise<Post> {
    const newPost = await this.postsRepository.create(post);
    return this.postsRepository.save(newPost);
  }

  async getUser(userId: number): Promise<User> {
    return this.userService.findOne(userId);
  }
}
