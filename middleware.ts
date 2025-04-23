// middleware.ts
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
    const basicAuth = request.headers.get("authorization");
    const USER = "ptfluser";
    const PASS = "ptflpass";

    const expectedAuth =
        "Basic " + Buffer.from(`${USER}:${PASS}`).toString("base64");

    if (basicAuth !== expectedAuth) {
        return new Response("認証が必要です", {
            status: 401,
            headers: {
                "WWW-Authenticate": 'Basic realm="Secure Area"',
            },
        });
    }

    return NextResponse.next();
}

export const config = {
    matcher: ["/", "/((?!_next|favicon.ico).*)"], // 静的ファイル除外
};
