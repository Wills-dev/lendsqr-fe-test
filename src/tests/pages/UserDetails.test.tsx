import React from "react";
import { render, act, screen, waitFor } from "@testing-library/react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { describe, it, vi, expect } from "vitest";
import { Mocked } from "vitest";
import axios from "axios";
import UserDetails from "../../pages/UserDetails/UserDetails";
import { UserData } from "../../types";

vi.mock("axios");
const mockedAxios = axios as Mocked<typeof axios>;

const consoleErrorSpy = vi.spyOn(console, "error").mockImplementation(() => {});

const mockUserData: UserData = {
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

const renderWithRouter = (ui: React.ReactElement, { route = "/" } = {}) => {
  window.history.pushState({}, "Test page", route);
  return render(
    <Router>
      <Routes>
        <Route path="/dashboard/users/user-info/:userId" element={ui} />
      </Routes>
    </Router>
  );
};

describe("useApi in PageComponent", () => {
  it("displays a loading state, then data for a successful API call", async () => {
    mockedAxios.get.mockResolvedValueOnce({ data: mockUserData });

    await act(async () => {
      renderWithRouter(<UserDetails />, {
        route: "/dashboard/users/user-info/1",
      });
    });

    const SpinComponent = screen.getByTestId("loading-spinner");
    const UserData = screen.getByTestId("user-data");

    expect(SpinComponent).toBeInTheDocument();

    await waitFor(() => expect(SpinComponent).not.toBeInTheDocument());
    expect(UserData).toBeInTheDocument();
  });

  it("displays a loading state, then does nothing for a failed API call except log the error", async () => {
    mockedAxios.get.mockRejectedValueOnce(new Error("Network Error"));

    await act(async () => {
      renderWithRouter(<UserDetails />, {
        route: "/dashboard/users/user-info/1",
      });
    });

    const SpinComponent = screen.getByTestId("loading-spinner");
    expect(SpinComponent).toBeInTheDocument();

    await waitFor(() =>
      expect(screen.queryByTestId("loading-spinner")).not.toBeInTheDocument()
    );

    expect(screen.queryByTestId("user-data")).toBe("");
    expect(consoleErrorSpy).toHaveBeenCalledWith(
      "API call failed:",
      expect.any(Error)
    );
  });
});
