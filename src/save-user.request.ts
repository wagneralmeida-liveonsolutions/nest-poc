import { IsNotEmpty } from 'class-validator';
import { IRequest } from './controller.abstraction';
import { SaveUserCommand } from './save-user.command';

export class SaveUserRequest implements IRequest<SaveUserCommand> {
  @IsNotEmpty()
  readonly firstName: string;

  @IsNotEmpty()
  readonly lastName: string;

  async toCommand(): Promise<SaveUserCommand> {
    return new SaveUserCommand(`${this.firstName} ${this.lastName}`);
  }
}
