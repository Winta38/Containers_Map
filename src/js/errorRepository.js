export default class ErrorRepository {
    constructor() {
        this.errors = new Map();
    }

    addError(code, description) {
        this.errors.set(code, description);
    }

    translate(code) {
        const errorDescription = this.errors.get(code);
        if (errorDescription) {
            return errorDescription;
        }
        return 'Unknown error';
    }
}