import { useAuthStore } from "./auth-store";

export function ProtectedRoute() {
    const { isAuthenticated, isRestoring } = useAuthStore();

    // 起動直後の認証確認中表示
    if (isRestoring) {
        return <div>読み込み中</div>;
    }
    if (!isAuthenticated) {
        return;
    }
}
