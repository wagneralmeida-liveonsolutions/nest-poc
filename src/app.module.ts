import { Module } from '@nestjs/common';
import { AbstractUseCase } from './controller.abstraction';
import { SaveUserController } from './save-user.controller';
import { SaveUserService } from './save-user.service';

@Module({
  imports: [],
  controllers: [SaveUserController],
  providers: [{ provide: AbstractUseCase, useClass: SaveUserService }],
})
export class AppModule {}
