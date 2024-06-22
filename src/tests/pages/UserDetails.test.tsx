import { render, screen, waitFor } from "@testing-library/react";
import { useEffect, act } from "react";
import { useGetUserInfo } from "../../hooks/useGetUserInfo";
import { vi, describe, it, expect, afterEach } from "vitest";
import axios from "axios";

vi.mock("axios");

type MockedAxios = {
  get: (url: string) => Promise<{ data: any }>;
};

const mockedAxios = axios as unknown as MockedAxios;

describe("useGetUserInfo", () => {
  afterEach(() => {
    vi.clearAllMocks();
  });

  it("should update userInfo and loading state", async () => {
    const mockUserData = {
      id: 19,
      full_name: "Stokes Case",
      phone_number: "+1468-548-4247",
      bvn: 51081296280,
      email: "stokescase@indexia.com@example.com",
      gender: "female",
      type_of_resident: "rented",
      marital_status: "married",
      children: 5,
      user_rating: 1,
      amount: "$29,043.50",
      bank_details: {
        bank_name: "Atgen",
        account_number: 7528565402,
      },
      level_of_education: "high school",
      employment_status: "retired",
      sector_of_employment: "Education",
      duration_of_employment: "19 years",
      office_email: "stokescase@atgen.com.@example.com",
      loan_repayment_balance: "$9,268.26",
      income: "$19,139.16",
      social_media: {
        twitter_name: "@kitty3433",
        facebook_name: "Baird Coffey",
        instagram_name: "lorie1437",
      },
      guarantors: [
        {
          name: "Byers Aguilar",
          phone_number: "+1684-821-4496",
          relationship: "friend",
          email: "abbott.grimes@example.com",
        },
        {
          name: "Wills Wilson",
          phone_number: "+1684-821-4496",
          relationship: "boss",
          email: "wills.grimes@example.com",
        },
      ],
    };

    mockedAxios.get = vi.fn().mockResolvedValueOnce({ data: mockUserData });

    function TestComponent() {
      const { loading, userInfo, getUserInfo } = useGetUserInfo();

      useEffect(() => {
        getUserInfo("1");
      }, [getUserInfo]);

      if (loading) return <div data-testid="loading-spinner">Loading...</div>;

      return (
        userInfo && (
          <div data-testid="user-data">
            <h1>{userInfo.full_name}</h1>
            <p>{userInfo.email}</p>
          </div>
        )
      );
    }

    render(<TestComponent />);

    const loadingSpinner = screen.queryByTestId("loading-spinner");
    expect(loadingSpinner).not.toBeInTheDocument();

    await act(async () => {
      await Promise.resolve();
    });

    const userDataComponent = screen.getByTestId("user-data");
    expect(userDataComponent).toBeInTheDocument();

    expect(loadingSpinner).not.toBeInTheDocument();
  });

  it("should handle fetch error", async () => {
    mockedAxios.get = vi.fn().mockRejectedValueOnce(new Error("Network Error"));

    function TestComponent() {
      const { error, loading, userInfo, getUserInfo } = useGetUserInfo();

      useEffect(() => {
        getUserInfo("1");
      }, [getUserInfo]);

      if (loading) return <div data-testid="loading-spinner">Loading...</div>;
      if (error) return <div data-testid="error">Error fetching user info</div>;

      return (
        userInfo && (
          <div data-testid="user-data">
            <h1>{userInfo.full_name}</h1>
            <p>{userInfo.email}</p>
          </div>
        )
      );
    }

    render(<TestComponent />);

    await act(async () => {
      await Promise.resolve();
    });

    const errorComponent = screen.getByTestId("error");
    expect(errorComponent).toBeInTheDocument();
    expect(screen.getByText("Error fetching user info")).toBeInTheDocument();
  });
});
