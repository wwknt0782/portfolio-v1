export type ContactPayload = {
    name: string;
    companyName: string;
    email: string;
    message: string;
};

export type ContactResponse = {
    message: string;
};

export type ContactStep = "input" | "confirm" | "complete";

export type ContactStore = {
    contactPayload: ContactPayload;
    isSubmitting: boolean;
    contactStep: ContactStep;

    setContactStep: (data: ContactStep) => void;
    submitContact: () => Promise<void>;
    setForm: (data: ContactPayload) => void;
    clearForm: () => void;
};
