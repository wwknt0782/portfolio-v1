//テスト用
"use server";

const myMail1 = process.env.MY_MAIL_ADDRESS1 as string; //送信先メールアドレス1
const myMail2 = process.env.MY_MAIL_ADDRESS2 as string; //送信先メールアドレス2

export default async function ServerAction() {
    console.log(myMail1);
    console.log(myMail2);
    return (
        <main>
            <div>
                <p>メール1: {myMail1}</p>
                <p>メール2: {myMail2}</p>
            </div>
        </main>
    );
}
