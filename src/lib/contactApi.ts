export type ContactPayload = {
  name: string;
  companyName: string;
  email: string;
  message: string;
};

export function getContactApiUrl(): string {
  return (
    process.env.NEXT_PUBLIC_CONTACTS_API_URL ||
    "http://localhost:8080/api/contacts"
  );
}

export async function sendContactForm(payload: ContactPayload) {
  const url = getContactApiUrl();
  const response = await fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });

  if (!response.ok) {
    throw new Error(`フォーム送信に失敗しました: ${response.status}`);
  }

  return response.json();
}
