export type User = {
    id: string,
    email: string,
    password: string,
    role: "normal" | "admmin"
}

export type AuthenticationData = {
    id: string;
    role: string;
  }