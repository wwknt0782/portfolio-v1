import { Html, Text, Head, Body, Link } from "@react-email/components";
import type * as React from "react";

interface EmailTemplateProps {
    name: string;
    company?: string;
    email: string;
    text: string;
}

export default function EmailTemplate(props: EmailTemplateProps) {
    return (
        <Html lang="ja">
            <Head />
            <Body>
                <Text>お問い合わせありがとうございます。</Text>
                <Text>内容を確認後，ご連絡させていただきます。</Text>
                <Text>お問い合わせいただいた内容は以下のとおりです。</Text>
                <Text>
                    ----------------------------------------------------------------------------
                </Text>
                <Text>【お名前】</Text>
                <Text>{props.name}</Text>
                <Text>【会社名】</Text>
                <Text>{props.company ?? " "}</Text>
                <Text>【メールアドレス】</Text>
                <Text>{props.email}</Text>
                <Text>【お問い合わせ内容】</Text>
                <Text>{props.text}</Text>
                <Text></Text>
                <Text>
                    ======================================================================
                </Text>
                <Text>このメールは送信専用です。</Text>
                <Text>
                    メールの内容についてのご確認，およびお心当たりがない場合は，お手数ですが
                </Text>
                <Text></Text>
                <Text>下記メールアドレスからご連絡ください。</Text>
                <Text>
                    お問い合わせ用メールアドレス:{" "}
                    <Link href="mailto:wwknt0782@gmail.com">
                        wwknt0782@gmail.com
                    </Link>
                </Text>
                <Text>
                    ======================================================================
                </Text>
            </Body>
        </Html>
    );
}
