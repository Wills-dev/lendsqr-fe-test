import React from "react";
import { render, screen } from "@testing-library/react";
import Header from "../../components/Header/Header";
import { UserContext } from "../../context/UserState";

const mockSetIsSideBarActive = vi.fn();
const mockContextValue = {
  isSideBarActive: false,
  setIsSideBarActive: mockSetIsSideBarActive,
};

const renderWithUserContext = (
  ui: React.ReactElement,
  contextValue = mockContextValue
) => {
  return render(
    <UserContext.Provider value={contextValue}>{ui}</UserContext.Provider>
  );
};

describe("Header Component", () => {
  it("renders correctly", () => {
    renderWithUserContext(<Header />);

    expect(screen.getByAltText("logo")).toBeInTheDocument();
    expect(
      screen.getByPlaceholderText("Search for anything")
    ).toBeInTheDocument();

    expect(screen.getByText("Docs")).toBeInTheDocument();

    expect(screen.getByAltText("avatar")).toBeInTheDocument();
  });
});
