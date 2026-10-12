//loginレイアウト

export default function loginLayout({
    children,
}: Readonly<{ children: React.ReactNode }>) {
    return <div data-page="login">{children}</div>;
}
