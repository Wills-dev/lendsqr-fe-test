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

interface BankDetails {
  bank_name: string;
  account_number: number;
}

interface SocialMedia {
  twitter_name: string;
  facebook_name: string;
  instagram_name: string;
}

interface Guarantor {
  name: string;
  phone_number: string;
  relationship: string;
  email: string;
}

export interface UserData {
  id: number;
  full_name: string;
  phone_number: string;
  bvn: number;
  email: string;
  gender: "male" | "female" | "non-binary" | "other";
  type_of_resident: "owned" | "rented" | "mortgaged" | "other";
  marital_status: "single" | "married" | "divorced" | "widowed" | "other";
  children: number;
  user_rating: number;
  amount: string;
  bank_details: BankDetails;
  level_of_education:
    | "high school"
    | "associate"
    | "bachelor"
    | "master"
    | "doctorate"
    | "other";
  employment_status: "employed" | "self-employed" | "unemployed" | "retired";
  sector_of_employment: string;
  duration_of_employment: string;
  office_email: string;
  loan_repayment_balance: string;
  income: string;
  social_media: SocialMedia;
  guarantors: Guarantor[];
}

export interface Filters {
  organization: string;
  username: string;
  email: string;
  date_joined: string;
  phoneNumber: string;
  status: string;
}

export interface AllUsersTableProps {
  loading: boolean;
  allUsers: User[];
  currentItems: User[];
  filters: Filters;
  handleInputChange: (
    event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => void;
  handleReset: () => void;
  handleFilter: () => void;
  formatDate: (date: string) => string;
  offset: number;
  filteredUsers: User[];
  pageCount: number;
  handlePageClick: (data: { selected: number }) => void;
}
