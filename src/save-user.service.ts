import { Injectable } from '@nestjs/common';
import { AbstractUseCase } from './controller.abstraction';
import { SaveUserCommand } from './save-user.command';

export type SaveUserServiceOutput = {
  name: string;
  id: string;
  createdEmail: string;
};

@Injectable()
export class SaveUserService extends AbstractUseCase<
  SaveUserCommand,
  SaveUserServiceOutput
> {
  async execute(input: SaveUserCommand): Promise<SaveUserServiceOutput> {
    return {
      id: '123',
      name: input.name,
      createdEmail: '@mail.com',
    };
  }
}
