import { Injectable } from '@nestjs/common';
import { SaveUserCommand } from './save-user.command';
import {
  AbstractSaveUserUseCase,
  SaveUserServiceOutput,
} from './save-user.use-case';

@Injectable()
export class SaveUserService extends AbstractSaveUserUseCase {
  async execute(input: SaveUserCommand): Promise<SaveUserServiceOutput> {
    return {
      id: '123',
      name: input.name,
      createdEmail: '@mail.com',
    };
  }
}
