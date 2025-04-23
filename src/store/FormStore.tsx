//zustandによるフォームデータ管理の定義
import type { FormData } from "@/constants/FormSchema";
import { create } from "zustand";

//type FormData = {
//	name: string;
//	company: string;
//	email: string;
//	text: string;
//  submit?: any
//};

type FormStore = {
    data: FormData;
    setData: (newData: Partial<FormData>) => void;
    reset: () => void;
};

export const useFormStore = create<FormStore>((set) => ({
    //FormDataの初期値
    data: {
        name: "",
        company: "",
        email: "",
        text: "",
    },
    //FormDataへデータ保存
    setData: (newData) =>
        set((state) => ({ data: { ...state.data, ...newData } })),
    //FormDataのリセット
    reset: () =>
        set({
            data: { name: "", company: "", email: "", text: "" },
        }),
}));
