export interface Create {
  name: string;
  email: string;
  password: string;
}

export interface User {
  id: number;
  name: string;
  email: string;
  balance: number;
  createdAt: Date;
}
