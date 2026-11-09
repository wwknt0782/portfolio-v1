import { fetcher } from "@/lib/fetcher";
import type { ContactPayload, ContactResponse } from "./contact-types";

// 問い合わせ送信
export async function submitContactApi(data: ContactPayload): Promise<void> {
    await fetcher<ContactResponse>("/api/contact", {
        method: "POST",
        body: JSON.stringify(data),
    });
}
