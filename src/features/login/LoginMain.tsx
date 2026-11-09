import LoginForm from "@/features/auth/LoginForm";

export default function ProfileMain() {
    return (
        <main className="grow mt-16 overflow-auto">
            <div className="mx-4 md:px-10 lg:px-20">
                <LoginForm />
            </div>
        </main>
    );
}
