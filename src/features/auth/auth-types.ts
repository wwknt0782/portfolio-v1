export type LoginRequest = {
    userName: string;
    password: string;
};

export type LoginResponse = {
    success: true;
    mfaRequired?: boolean;
};

export type ApiErrorResponse = {
    message?: string;
};

export type AuthUser = {
    id: string;
    userName: string;
    roles: string[];
};

// バックエンドから帰ってくる認証状態
export type AuthStateResponse = {
    authenticated: boolean;
    status:
        | "AUTHENTICATED"
        | "TOKEN_EXPIRED"
        | "MFA_TOKEN_EXPIRED"
        | "NOT_AUTHENTICATED"
        | "MFA_REQUIRED";
};

// フロントエンドが持つ認証状態
export type AuthState = {
    user: AuthUser | null; // ログインしているユーザーの情報
    isAuthenticated: boolean; // 認証状態
    isLoading: boolean; // 認証確認状態
    isRestoring: boolean; // セッションを復元中か
    isLoggingOut: boolean; // ログアウト処理中
    isMfaRequired: boolean; // MFAが必要か

    login: (data: LoginRequest) => Promise<{ isMfaRequired: boolean }>; // ログイン処理を実行してMFAが必要かを受け取る
    verifyMfaAndLogin: (data: { code: string }) => Promise<void>; // MFAコードを受け取ってMFA認証+ログイン処理を非同期で実行する
    logout: (
        type?: "success" | "error" | "silent",
        message?: string,
    ) => Promise<void>; // ログアウト処理

    restoreAuth: () => Promise<void>;
    refreshCurrentUser: () => Promise<void>;
};

export type VerifyMfaRequest = {
    code: string;
};
