import axios, { type AxiosError } from "axios";
import { signOut as firebaseSignOut } from "firebase/auth";
import { auth } from "./firebase";

const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL
  ? `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/v1`
  : "";

// ─── 'Axios Instances ────────────────────────────────────────────────
export const publicAxios = axios.create({
  baseURL: API_BASE_URL,
  headers: { "Content-Type": "application/json" },
});

export const authAxios = axios.create({
  baseURL: API_BASE_URL,
  withCredentials: true,
  headers: { "Content-Type": "application/json" },
});

// Redirect to login on 401 (expired/invalid session cookie)
authAxios.interceptors.response.use(
  (response) => response,
  (error: AxiosError) => {
    if (error.response?.status === 401) {
      firebaseSignOut(auth).finally(() => {
        window.location.href = "/login";
      });
    }
    return Promise.reject(error);
  },
);
