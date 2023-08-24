import { Module } from '@nestjs/common';
import { SaveUserController } from './save-user.controller';
import { SaveUserService } from './save-user.service';
import { AbstractSaveUserUseCase } from './save-user.use-case';

@Module({
  imports: [],
  controllers: [SaveUserController],
  providers: [{ provide: AbstractSaveUserUseCase, useClass: SaveUserService }],
})
export class AppModule {}
