import {
  createUserWithEmailAndPassword,
  signOut as firebaseSignOut,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  type AuthProvider,
  type User,
} from "firebase/auth";
import { publicAxios } from "./axios";
import { auth, githubProvider, googleProvider } from "./firebase";

// ─── Firebase Auth Helpers ──────────────────────────────────────────
async function exchangeTokenForSession(user: User) {
  const idToken = await user.getIdToken();
  await publicAxios.post("/auth/session", { idToken }, { withCredentials: true });
}

export async function loginWithEmail(email: string, password: string) {
  const { user } = await signInWithEmailAndPassword(auth, email, password);
  await exchangeTokenForSession(user);
  return user;
}

export async function signupWithEmail(email: string, password: string) {
  const { user } = await createUserWithEmailAndPassword(auth, email, password);
  await exchangeTokenForSession(user);
  return user;
}

async function loginWithProvider(provider: AuthProvider) {
  const { user } = await signInWithPopup(auth, provider);
  await exchangeTokenForSession(user);
  return user;
}

export const loginWithGoogle = () => loginWithProvider(googleProvider);
export const loginWithGithub = () => loginWithProvider(githubProvider);

export async function signOut() {
  await publicAxios.post("/auth/logout", {}, { withCredentials: true });
  await firebaseSignOut(auth);
  window.location.href = "/login";
}

// ─── Auth State Listener ───────────────────────────────────────────
export function onAuthChange(callback: (user: User | null) => void) {
  return onAuthStateChanged(auth, callback);
}
