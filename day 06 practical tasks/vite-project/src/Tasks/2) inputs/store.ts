import { create } from "zustand";
import { persist } from "zustand/middleware";

interface InputState {
  inputs: string[];
  newInput: string;
  setNewInput: (value: string) => void;
  addInput: () => void;
  removeInput: (index: number) => void;
}

export const Inputs = create(
    persist<InputState>(
        (set) => ({
            inputs: [],
            newInput: '',
            setNewInput: (value) => set({ newInput: value }),
            addInput: () => set(state => ({inputs: [...state.inputs, state.newInput]})),
            removeInput: (index: number) => set(state => ({inputs: state.inputs.filter((_, i) => i !== index)}))
        }),
        {
            name: 'inputs'
        }
    )
)