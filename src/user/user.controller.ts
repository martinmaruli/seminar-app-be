// user.controller.ts
import { Controller, Post, Body } from '@nestjs/common';
import { UserService } from './user.service';
import { User } from './user.entity';

@Controller('auth')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post('register')
  async register(@Body() user: User): Promise<{ message: string }> {
    const existingUser = await this.userService.findByUsername(user.username);
    if (existingUser) {
      throw new Error('Username already exists');
    }
    await this.userService.create(user);
    return { message: 'User registered successfully' };
  }
}
