import { it, expect, describe } from "vitest";
import { render, screen } from "@testing-library/react";
import { useEffect, act } from "react";
import axios from "axios";
import Users from "../../pages/Users/Users";

vi.mock("axios");

type MockedAxios = {
  get: (url: string) => Promise<{ data: any }>;
};

const mockedAxios = axios as unknown as MockedAxios;

describe("should handle fetch all user", () => {
  afterEach(() => {
    vi.clearAllMocks();
  });

  it("", async () => {
    const mockUser = [
      {
        id: 1,
        username: "carlson",
        phoneNumber: "+1 (936) 501-2137",
        organization: "Omatom",
        email: "carlsontrujillo@omatom.com",
        date_joined: "2021-10-31T05:16:15.SSS-01:00",
        status: "inactive",
      },
      {
        id: 2,
        username: "thompson",
        phoneNumber: "+1 (985) 438-3574",
        organization: "Zytrac",
        email: "thompsontrujillo@zytrac.com",
        date_joined: "2021-11-23T08:25:17.SSS-01:00",
        status: "inactive",
      },
    ];

    mockedAxios.get = vi.fn().mockResolvedValueOnce({ data: mockUser });

    // render(<Users />);
    // const loadingSpinner = screen.queryByTestId("loading-spinner");
    // expect(loadingSpinner).not.toBeInTheDocument();
  });
});
