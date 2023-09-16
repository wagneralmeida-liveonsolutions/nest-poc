export type TCommand<Data> = NonNullable<Data>;

export interface IRequest<ICommand> {
  toCommand: () => Promise<ICommand>;
}

export interface IController<Input, Output> {
  execute(input: IRequest<Input>): Promise<Output>;
}

interface IUseCase<Input extends TCommand<unknown>, Output> {
  execute(input: Input): Promise<Output>;
}

export abstract class AbstractUseCase<Input extends TCommand<unknown>, Output>
  implements IUseCase<Input, Output>
{
  abstract execute(input: Input): Promise<Output>;
}

export abstract class AbstractControllerWithUseCase<Input, Output>
  implements IController<Input, Output>
{
  protected abstract readonly useCase: AbstractUseCase<unknown, Output>;

  async execute(input: IRequest<Input>): Promise<Output> {
    return await this.useCase.execute(await input.toCommand());
  }
}

export abstract class AbstractController<Input, Output>
  implements IController<Input, Output>
{
  abstract execute(input: IRequest<Input>): Promise<Output>;
}
