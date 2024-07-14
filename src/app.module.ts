// app.module.ts
import { Module, MiddlewareConsumer, RequestMethod } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserController } from './user/user.controller';
import { UserService } from './user/user.service';
import { User } from './user/user.entity';
import { SeminarController } from './seminar/seminar.controller';
import { SeminarService } from './seminar/seminar.service';
import { Seminar } from './seminar/seminar.entity';
import { AuthMiddleware } from './auth/auth.middleware';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'password',
      database: 'seminar_app',
      entities: [User, Seminar],
      synchronize: true,
    }),
    TypeOrmModule.forFeature([User, Seminar]),
  ],
  controllers: [UserController, SeminarController],
  providers: [UserService, SeminarService],
})
export class AppModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(AuthMiddleware)
      .forRoutes({ path: '*', method: RequestMethod.ALL });
  }
}
