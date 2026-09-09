import LoginForm from '@/components/LoginForm';

export default function LoginPage() {
  return (
    <main className="min-h-screen flex items-center justify-center">
      <div className="w-full max-w-lg p-8">
        <h1 className="text-2xl mb-6">ログイン</h1>
        <LoginForm />
      </div>
    </main>
  );
}
