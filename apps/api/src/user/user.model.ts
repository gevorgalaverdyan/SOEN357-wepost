export type Token = { sub: string; iat: number; exp: number };

export interface UserProfile {
  id: string;
  email: string;
  password: string;
  name: string;
  role: number;
}
