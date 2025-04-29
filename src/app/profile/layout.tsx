//profileレイアウト

export default function ProfileLayout({
    children,
}: Readonly<{ children: React.ReactNode }>) {
    return <div data-page="profile">{children}</div>;
}
