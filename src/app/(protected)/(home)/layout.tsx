//homeレイアウト

export default function HomeLayout({
    children,
}: Readonly<{ children: React.ReactNode }>) {
    return <div data-page="home">{children}</div>;
}
