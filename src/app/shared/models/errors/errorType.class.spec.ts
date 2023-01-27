import { ErrorType } from './errorType.class';

describe('ErrorType class', () => {
  let errorType: ErrorType;
  beforeEach(() => {
    errorType = new ErrorType();
  });

  it('should have errors property', () => {
    expect(errorType.errors).toBeDefined();
  });

  it('should have 404 error object', () => {
    expect(errorType.errors['404']).toBeDefined();
    expect(errorType.errors['404'].code).toEqual(404);
    expect(errorType.errors['404'].message).toEqual('Cooperado não encontrado');
  });

  it('should have 500 error object', () => {
    expect(errorType.errors['500']).toBeDefined();
    expect(errorType.errors['500'].code).toEqual(500);
    expect(errorType.errors['500'].message).toEqual(
      'Oops estamos passando por algumas instabilidades no nosso sistema!'
    );
  });
});
