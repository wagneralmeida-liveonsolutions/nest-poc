import {
  Body,
  Controller,
  Post,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import {
  AbstractControllerWithUseCase,
  AbstractUseCase,
} from './controller.abstraction';
import { SaveUserCommand, TUser } from './save-user.command';
import { SaveUserRequest } from './save-user.request';
import { SaveUserServiceOutput } from './save-user.service';

type Output = SaveUserServiceOutput;

@Controller('save-user')
export class SaveUserController extends AbstractControllerWithUseCase<
  TUser,
  Output
> {
  constructor(
    protected readonly useCase: AbstractUseCase<
      SaveUserCommand,
      SaveUserServiceOutput
    >,
  ) {
    super();
  }

  @Post()
  @UsePipes(new ValidationPipe({ transform: true }))
  async execute(@Body() request: SaveUserRequest): Promise<Output> {
    const output = await super.execute(request);
    return output;
  }
}
