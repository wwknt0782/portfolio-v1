"use client";

import React, { useState } from "react";
import { loginApi, requestLogin } from "./auth-api";
import { LoginApiError } from "./auth-api";

export default function LoginForm() {
    const [userName, setuserName] = useState("");
    const [password, setPassword] = useState("");
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [error, setError] = useState("");

    async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();
        setIsSubmitting(true);
        try {
            await loginApi({ userName, password });
            window.location.href = "/";
        } catch (error) {
            if (error instanceof LoginApiError) {
                setError(error.message);
            } else {
                setError("サーバーとの通信に失敗しました。");
            }
        } finally {
            setIsSubmitting(false);
        }
    }

    return (
        <div className="flex flex-col items-center border w-full max-w-xs mx-auto max-h-5xlh-full mt-20 pt-10 pb-10 pr-10 pl-10">
            <h1 className="text-3xl mb-6 w-full">ログイン</h1>

            <form onSubmit={handleSubmit} className="border">
                <label htmlFor="userName" className="flex flex-col w-full">
                    <h2 className="text-xl">ユーザー名</h2>
                    <input
                        id="userName"
                        name="userName"
                        type="text"
                        autoComplete="username"
                        disabled={isSubmitting}
                        value={userName}
                        onChange={(e) => setuserName(e.target.value)}
                        required
                        className="border"
                    />
                </label>
                <label htmlFor="password" className="flex flex-col w-full mt-5">
                    <h2 className="text-xl">パスワード</h2>
                    <input
                        id="password"
                        name="password"
                        type="password"
                        autoComplete="password"
                        disabled={isSubmitting}
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                        className="border"
                    />
                </label>
                <div className="text-red-600 mt-5">{error}</div>
                <div className="flex flex-col items-center">
                    <button
                        type="submit"
                        disabled={isSubmitting}
                        className="border disabled:opacity-50"
                    >
                        ログイン
                    </button>
                </div>
            </form>
        </div>
    );
}
