import ErrorRepository from '../app';

describe('ErrorRepository', () => {
    let errorRepository;

    beforeEach(() => {
        errorRepository = new ErrorRepository();
    });

    test('should add an error to the repository', () => {
        errorRepository.addError(404, 'Page not found');
        expect(errorRepository.errors.size).toBe(1);
        expect(errorRepository.errors.get(404)).toBe('Page not found');
    });

    test('should translate the error code to the description', () => {
        errorRepository.addError(404, 'Page not found');
        errorRepository.addError(500, 'Internal server error');
        expect(errorRepository.translate(404)).toBe('Page not found');
        expect(errorRepository.translate(500)).toBe('Internal server error');
    });

    test('should return "Unknown error" if the error code is not in the repository', () => {
        expect(errorRepository.translate(404)).toBe('Unknown error');
    });
});