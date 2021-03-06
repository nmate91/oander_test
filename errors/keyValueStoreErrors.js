const config = require('../config');
const { NOT_FOUND, BAD_REQUEST, NO_CONTENT } = require('./statusCodes');

class NotFoundError extends Error {
    constructor(key) {
        super(config.http.errorMessages.notFound(key));
        Object.setPrototypeOf(this, new.target.prototype);

        this.name = 'NotFoundError';
        this.statusCode = NOT_FOUND;

        Error.captureStackTrace(this);
    }
}

class BadRequestError extends Error {
    constructor(description) {
        super(description);
        Object.setPrototypeOf(this, new.target.prototype);

        this.name = 'BadRequest';
        this.statusCode = BAD_REQUEST;

        Error.captureStackTrace(this);
    }
}

class NoContentError extends Error {
    constructor(description) {
        super(description);
        Object.setPrototypeOf(this, new.target.prototype);

        this.name = 'NoContent';
        this.statusCode = NO_CONTENT;

        Error.captureStackTrace(this);
    }
}

module.exports = { NotFoundError, BadRequestError, NoContentError };
