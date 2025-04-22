//zodでフォームのスキーマを定義
import { z } from "zod";

//バリデーションとメッセージの定義
export const FormSchema = z.object({
	name: z
		.string()
		.min(1, { message: "必須項目です。" })
		.max(50, { message: "50文字以内で入力してください。" }),
	company: z.string().max(50, { message: "50文字以内で入力してください。" }),
	email: z
		.string()
		.min(1, { message: "必須項目です。" })
		.max(90, { message: "90文字以内で入力してください。" })
		.email({ message: "正しいメールアドレスを入力してください。" }),
	text: z
		.string()
		.min(1, { message: "必須項目です。" })
		.max(800, { message: "800文字以内で入力してください。" }),
	submit: z.any(),
});

export type FormData = z.infer<typeof FormSchema>; //フォームの型エイリアス
//{
//	name: string;
//	company: string;
//	email: string;
//	text: string;
//  submit?: any
//};
