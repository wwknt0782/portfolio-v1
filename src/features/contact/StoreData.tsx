"use client";

import { useFormStore } from "@/store/FormStore";
import type { FormData } from "@/store/FormStore";
import { useRouter } from "next/navigation";

export default function StoreData(newData: FormData) {
	const { setData } = useFormStore();
	const router = useRouter();

	//フォームがSubmitされたらzustandでデータを保存して確認ページへ遷移 :z.infer<typeof FormSchema>
	setData(newData);
	router.push("/contact/confirm");
}
