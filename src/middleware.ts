//Basic認証 参考: https://qiita.com/axoloto210/items/747eb784e61b173d30b8
import { NextRequest, NextResponse } from "next/server";

export const config = {
    matcher: ["/:path*"],
};

export function middleware(req: NextRequest) {
    //開発環境では認証を要求しない
    if (process.env.NEXT_PUBLIC_NODE_ENV === "development") {
        return NextResponse.next();
    }

    //通常環境では認証を要求する
    const basicAuth = req.headers.get("authorization");
    const url = req.nextUrl;
    if (basicAuth) {
        const authValue = basicAuth.split(" ")[1];
        const [user, pwd] = atob(authValue).split(":");

        if (
            user === process.env.NEXT_PUBLIC_BASIC_ID &&
            pwd === process.env.NEXT_PUBLIC_BASIC_PWD
        ) {
            return NextResponse.next();
        }
    }
    url.pathname = "/api/auth"; //認証されていない場合はauth/route.tsにリダイレクトして認証を要求する
    return NextResponse.rewrite(url);
}
