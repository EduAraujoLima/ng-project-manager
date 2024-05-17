export type User = {
  id: number;
  admin: boolean;
  email: string;
}

export type UserAuth = {
  email: string;
  password: string;
}

export type UserCreate = {
  email: string;
  password: string;
}
