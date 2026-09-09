"use client";

import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    try {
      const res = await fetch('/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      });
      if (!res.ok) {
        const data = await res.json();
        setError(data?.message || 'ログインに失敗しました');
        setLoading(false);
        return;
      }
      // Cookie set by server; redirect to home or protected page
      router.push('/');
    } catch (err) {
      setError('通信エラーが発生しました');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={submit} className="max-w-md mx-auto">
      <div>
        <label className="block mb-1">Email</label>
        <input
          className="w-full border p-2"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          required
        />
      </div>
      <div className="mt-4">
        <label className="block mb-1">Password</label>
        <input
          className="w-full border p-2"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          type="password"
          required
        />
      </div>
      {error && <p className="text-red-600 mt-2">{error}</p>}
      <button
        type="submit"
        disabled={loading}
        className="mt-4 px-4 py-2 bg-sky-600 text-white rounded"
      >
        {loading ? '送信中...' : 'ログイン'}
      </button>
    </form>
  );
}
