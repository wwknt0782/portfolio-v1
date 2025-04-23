//resendでメール送信
"use server";

import EmailTemplate from "@/features/contact/EmailTemplate";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY); //resend APIキー
const fromMail = process.env.FROM_MAIL_ADDRESS as string; //送信先メールアドレス
const toMail_1 = process.env.TO_MAIL_ADDRESS_1 as string; //送信先メールアドレス1
const toMail_2 = process.env.TO_MAIL_ADDRESS_2 as string; //送信先メールアドレス2

export async function POST(request: Request) {
    try {
        //requestのbodyを取得===================================================
        const body = await request.json();

        //resend APIでメール送信===================================================
        const { data, error } = await resend.emails.send({
            from: `K-WATANABE <${fromMail}>`,
            to: [body.email],
            bcc: [toMail_1, toMail_2],
            subject: "お問い合わせ",
            react: EmailTemplate({
                name: body.name,
                company: body.company,
                email: body.email,
                text: body.text,
            }),
        });

        //エラー処理===================================================
        if (error) {
            return new Response(JSON.stringify({ content: error }), {
                status: 500,
                headers: { "Content-Type": "application/json" },
            });
        }

        //正常処理===================================================
        return new Response(JSON.stringify({ content: data }), {
            status: 200,
            headers: { "Content-Type": "application/json" },
        });
    } catch (error) {
        //エラー処理===================================================
        return new Response(JSON.stringify({ content: error }), {
            status: 500,
            headers: { "Content-Type": "application/json" },
        });
    }
}
