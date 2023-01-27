import { Error } from './error.interface';

export class ErrorType {
  errors: Error = {
    '404': {
      message: 'Cooperado não encontrado',
      code: 404,
    },
    '500': {
      message:
        'Oops estamos passando por algumas instabilidades no nosso sistema!',
      code: 500,
    },
  };
}
