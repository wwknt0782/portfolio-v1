export class ApiError extends Error {
    constructor(
        message: string,
        public readonly status: number,
    ) {
        super(message);
        this.name = "ApiError";
    }
}

export class AuthenticationError extends ApiError {
    constructor() {
        super("認証の有効期限が切れました", 401);
        this.name = "AuthenticationError";
    }
}
