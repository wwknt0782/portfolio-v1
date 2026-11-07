export type LoginCredentials = {
    userName: string;
    password: string;
};

export type AuthUser = {
    userName: string;
    roles: string[];
};

// バックエンドから帰ってくる認証状態
export type AuthStateResponse = {
    authenticated: boolean;
    status: "AUTHENTICATED" | "TOKEN_EXPIRED" | "NOT_AUTHENTICATED";
};

// フロントエンドが持つ認証状態
export type AuthStore = {
    user: AuthUser | null;
    isAuthenticated: boolean;
    isLoggingIn: boolean;
    isRestoring: boolean;
    isLoggingOut: boolean;
    restoreError: string | null;

    login: (credentials: LoginCredentials) => Promise<void>;
    logout: () => Promise<void>;

    restoreAuth: () => Promise<void>;
    refreshCurrentUser: () => Promise<void>;
    clearAuth: () => void;
};
