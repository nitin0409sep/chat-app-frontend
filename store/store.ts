import { User } from "firebase/auth";
import { create } from "zustand";

type Store = {
  user: User | null;
  setUser: (user: User | null) => void;
};

export const useAuthStore = create<Store>((set) => ({
  user: null,
  setUser: (user: User | null) => {
    set({
      user,
    });
  },
}));
