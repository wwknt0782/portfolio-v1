//Basic認証を要求する
"use server";

export async function GET(request: Request) {
    return new Response("Auth Required", {
        status: 401,
        headers: {
            "WWW-Authenticate": 'Basic realm="Secure Area"',
        },
    });
}
