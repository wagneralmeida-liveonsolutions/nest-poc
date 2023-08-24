import { AbstractUseCase } from './controller.abstraction';
import { SaveUserCommand } from './save-user.command';

export type SaveUserServiceOutput = {
  name: string;
  id: string;
  createdEmail: string;
};

export abstract class AbstractSaveUserUseCase extends AbstractUseCase<
  SaveUserCommand,
  SaveUserServiceOutput
> {}
