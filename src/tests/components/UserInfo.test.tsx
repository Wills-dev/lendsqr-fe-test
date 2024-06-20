import { render, screen } from "@testing-library/react";
import UserInfo from "../../components/UserInfo/UserInfo";
import { UserData } from "../../types";

const mockUserData: UserData = {
  full_name: "John Doe",
  id: 12345,
  amount: "5000 USD",
  bank_details: {
    account_number: 9876543210,
    bank_name: "Sample",
  },
  marital_status: "single",
  phone_number: "123-456-7890",
  children: 0,
  email: "john.doe@example.com",
  type_of_resident: "owned",
  bvn: 12345678901,
  gender: "male",
  level_of_education: "bachelor",
  office_email: "john.doe@company.com",
  employment_status: "employed",
  income: "5000 USD/month",
  sector_of_employment: "Technology",
  loan_repayment_balance: "1000 USD",
  duration_of_employment: "5 years",
  user_rating: 3,
  social_media: {
    twitter_name: "johndoe",
    facebook_name: "johndoe.fb",
    instagram_name: "johndoe.ig",
  },
  guarantors: [
    {
      name: "Jane Smith",
      phone_number: "987-654-3210",
      email: "jane.smith@example.com",
      relationship: "Friend",
    },
    {
      name: "Peter Johnson",
      phone_number: "555-123-4567",
      email: "peter.johnson@example.com",
      relationship: "Colleague",
    },
  ],
};

describe("UserInfo Component", () => {
  //   it("renders loading spinner when loading is true", () => {
  //     render(<UserInfo userInfo={mockUserData} />);

  //     const SpinComponent = screen.getByTestId("loading-spinner");
  //     expect(SpinComponent).toBeInTheDocument();
  //   });

  it("renders user information", () => {
    render(<UserInfo userInfo={mockUserData} />);

    const elements = screen.getAllByText("John Doe");
    expect(elements.length).toBeGreaterThan(0);

    expect(
      screen.getByText(
        `${mockUserData.bank_details.account_number}/${mockUserData.bank_details.bank_name} Bank`
      )
    ).toBeInTheDocument();

    expect(screen.getByText(mockUserData.marital_status)).toBeInTheDocument();

    expect(screen.getByText(mockUserData.phone_number)).toBeInTheDocument();

    expect(screen.getByText(mockUserData.email)).toBeInTheDocument();
  });
});
