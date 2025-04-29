export default function PageTitle(props: { title: string }) {
    if (props.title === "profile") {
        return (
            <div>
                <p className="text-lg ml-3 mb-1 tracking-widest">Profile</p>
                <h2 className="text-5xl md:text-6xl relative">
                    プロ <span className="-ml-6">フ</span>
                    <span className="-ml-4 -mr-2">ィ</span>ール
                    <span className="absolute top-9 md:top-11.5 left-2 border-4 md:border-6 w-66 md:w-87 text-[var(--color-primary)]/40">
                        {" "}
                    </span>
                </h2>
            </div>
        );
    } else if (props.title === "works") {
        return (
            <div>
                <p className="text-lg ml-3 mb-1 tracking-widest">Works</p>
                <h2 className="text-5xl md:text-6xl relative">
                    制作実績
                    <span className="absolute top-9 md:top-11.5 left-1 border-4 md:border-6 w-52 md:w-65 text-[var(--color-primary)]/40">
                        {" "}
                    </span>
                </h2>
            </div>
        );
    } else if (props.title === "contact") {
        return (
            <div>
                <p className="text-lg ml-3 mb-1 tracking-widest">Contact</p>
                <h2 className="text-5xl md:text-6xl relative">
                    お問い合わせ
                    <span className="absolute top-9 md:top-11.5 left-1 border-4 md:border-6 w-74 md:w-95 text-[var(--color-primary)]/40">
                        {" "}
                    </span>
                </h2>
            </div>
        );
    } else {
        return null;
    }
}
