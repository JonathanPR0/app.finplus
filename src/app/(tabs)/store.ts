import { create } from "zustand";

type AddStore = {
  open: boolean;
  setOpen: (open: boolean) => void;
};

export const useAddStore = create<AddStore>((set) => ({
  open: false,
  setOpen: (open) => set({ open }),
}));
