import { create } from "zustand";

interface Formfields {
    label : string;
    type: 'text' | 'number' | 'password' | 'textarea' | 'date' | 'file';
    value: string;
}

interface formStoreState {
    formFields: Formfields[];
    addField: (field: Formfields) => void;
    removeField: (index: number) => void;
    updateField: (index: number, updateField: Formfields) => void;
    resetForm: () => void;
}

const useFormStore = create<formStoreState>((set) => ({
    formFields: [],
    addField: (field) => set(state => ({formFields: [...state.formFields, field]})),
    removeField: (index) => set(state => ({formFields: state.formFields.filter((_, i) => i !== index)})),
    updateField: (index, updateField) => set(state => ({
        formFields: state.formFields.map((field, i) => i === index ? updateField : field)
    })),
    resetForm: () => set({formFields: []})
}));

export default useFormStore