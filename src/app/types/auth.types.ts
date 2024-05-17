import { User } from "./user.types";

export type SuccessAuthResponse = {
  accessToken: string;
  user: User;
}

export type InvalidEmailResponse = string;

export type InvalidPasswordResponse = string;
