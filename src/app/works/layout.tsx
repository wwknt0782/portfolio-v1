//worksレイアウト

export default function WorksLayout({
    children,
}: Readonly<{ children: React.ReactNode }>) {
    return <div data-page="works">{children}</div>;
}
