import {
  Body,
  Controller,
  Post,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { AbstractControllerWithUseCase } from './controller.abstraction';
import { TUser } from './save-user.command';
import { SaveUserRequest } from './save-user.request';
import {
  AbstractSaveUserUseCase,
  SaveUserServiceOutput,
} from './save-user.use-case';

type Output = SaveUserServiceOutput;

@Controller('save-user')
export class SaveUserController extends AbstractControllerWithUseCase<
  TUser,
  Output
> {
  constructor(protected readonly useCase: AbstractSaveUserUseCase) {
    super();
  }

  @Post()
  @UsePipes(new ValidationPipe({ transform: true }))
  async execute(@Body() request: SaveUserRequest): Promise<Output> {
    const output = await super.execute(request);
    return output;
  }
}
