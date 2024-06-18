export interface LoginDetails {
  password: string;
  email: string;
}

export interface User {
  date_joined: string;
  email: string;
  id: number | null;
  organization: string;
  status: string;
  username: string;
  phoneNumber: string;
}
