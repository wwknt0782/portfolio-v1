"use client";

import React, { useState } from "react";
import { useAuthStore } from "./auth-store";
import { ApiError } from "./api-error";

export default function LoginForm() {
    const [userName, setuserName] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const login = useAuthStore((state) => state.login);
    const isLoggingIn = useAuthStore((state) => state.isLoggingIn);

    async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();
        setError("");
        try {
            await login({ userName, password });
            window.location.href = "/";
        } catch (error) {
            setError(getLoginErrorMessage(error));
        }
    }

    function getLoginErrorMessage(error: unknown): string {
        if (error instanceof ApiError) {
            switch (error.status) {
                case 400:
                    return "入力内容を確認してください。";
                case 401:
                    return "ユーザー名またはパスワードが正しくありません。";
                case 429:
                    return "ログイン試行回数が上限に達しました。しばらく待ってから再度お試しください。";
                default:
                    return "ログインに失敗しました。しばらく時間をあけて再度お試しください。";
            }
        }
        return "サーバーとの通信に失敗しました。";
    }

    return (
        <div className="w-full max-w-md mx-auto mt-8 px-6 py-6 md:px-8 border-2 border-[var(--color-primary)]/20 rounded-md shadow-md">
            <div className="mb-6">
                <p className="text-lg mb-1 tracking-widest">Login</p>
                <h1 className="text-4xl relative inline-block">
                    ログイン
                    <span className="absolute top-7 left-0 border-4 w-full text-[var(--color-primary)]/40" />
                </h1>
                <p className="mt-5 text-sm">
                    ユーザー名とパスワードを入力してください。
                </p>
            </div>

            <form onSubmit={handleSubmit}>
                <label htmlFor="userName" className="flex flex-col w-full">
                    <span className="text-xl my-2">ユーザー名</span>
                    <input
                        id="userName"
                        name="userName"
                        type="text"
                        autoComplete="username"
                        disabled={isLoggingIn}
                        value={userName}
                        onChange={(e) => setuserName(e.target.value)}
                        required
                        className="border-2 border-[var(--color-primary)]/40 rounded-md p-2 disabled:opacity-50"
                    />
                </label>
                <label htmlFor="password" className="flex flex-col w-full mt-5">
                    <span className="text-xl my-2">パスワード</span>
                    <input
                        id="password"
                        name="password"
                        type="password"
                        autoComplete="password"
                        disabled={isLoggingIn}
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                        className="border-2 border-[var(--color-primary)]/40 rounded-md p-2 disabled:opacity-50"
                    />
                </label>
                {error && (
                    <p role="alert" className="text-red-600 mt-4">
                        {error}
                    </p>
                )}

                <div className="flex flex-col items-center mt-7">
                    <button
                        type="submit"
                        disabled={isLoggingIn}
                        className="w-60 px-10 py-2 border-2 rounded-sm shadow-md bg-[var(--color-home-primary)] dark:bg-[var(--color-home-dark-primary)] border-[var(--color-home-text)]/20 dark:border-[var(--color-home-dark-text)]/20 text-[var(--color-home-secondary)] dark:text-[var(--color-home-dark-text)] whitespace-nowrap hover:scale-95 transition-all duration-200 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
                    >
                        {isLoggingIn ? "ログイン中..." : "ログイン"}
                    </button>
                </div>
            </form>
        </div>
    );
}
