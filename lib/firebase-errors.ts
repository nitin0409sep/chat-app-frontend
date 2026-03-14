const ERROR_MESSAGES: Record<string, string> = {
  "auth/user-not-found": "Invalid email or password",
  "auth/wrong-password": "Invalid email or password",
  "auth/invalid-credential": "Invalid email or password",
  "auth/email-already-in-use": "An account with this email already exists",
  "auth/too-many-requests": "Too many attempts. Please try again later",
  "auth/network-request-failed": "Network error. Check your connection",
  "auth/popup-closed-by-user": "Sign-in popup was closed",
  "auth/account-exists-with-different-credential":
    "An account already exists with a different sign-in method",
};

export function getFirebaseErrorMessage(error: unknown): string {
  if (
    error &&
    typeof error === "object" &&
    "code" in error &&
    typeof (error as { code: unknown }).code === "string"
  ) {
    return ERROR_MESSAGES[(error as { code: string }).code] ?? "Something went wrong. Please try again";
  }
  if (error instanceof Error) {
    return error.message;
  }
  return "Something went wrong. Please try again";
}
