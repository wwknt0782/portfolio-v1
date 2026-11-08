import type { FormData } from "@/constants/FormSchema";
import { create } from "zustand";
import { ContactPayload, ContactStore } from "./contact-types";
import { submitContactApi } from "./contact-api";

export const useContactStore = create<ContactStore>((set, get) => ({
    //FormDataの初期値
    contactPayload: {
        name: "",
        companyName: "",
        email: "",
        message: "",
    },
    isSubmitting: false,
    // フォームの進行状況
    contactStep: "input",

    setContactStep: (data) => {
        set({ contactStep: data });
    },
    submitContact: async () => {
        // お問い合わせフォーム送信処理
        set({ isSubmitting: true });
        try {
            await submitContactApi(get().contactPayload);
        } finally {
            set({ isSubmitting: false });
        }
    },
    // フォーム保存
    setForm: (newData) => {
        set({ contactPayload: newData });
    },
    clearForm: () => {
        // フォーム初期化処理
        set({
            contactPayload: {
                name: "",
                companyName: "",
                email: "",
                message: "",
            },
            isSubmitting: false,
        });
    },
}));
