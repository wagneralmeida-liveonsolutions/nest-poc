import { TCommand } from './controller.abstraction';

export type TUser = {
  name: string;
};

export class SaveUserCommand implements TCommand<TUser> {
  constructor(readonly name: string) {}
}
