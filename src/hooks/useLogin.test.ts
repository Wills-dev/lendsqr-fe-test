import { renderHook, act } from "@testing-library/react-hooks";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { useLogin } from "./useLogin";

// Mock modules
jest.mock("axios");

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: jest.fn(),
}));

const localStorageMock = (() => {
  let store: Record<string, string> = {};
  return {
    getItem: (key: string) => store[key] || null,
    setItem: (key: string, value: string) => {
      store[key] = value;
    },
    clear: () => {
      store = {};
    },
    removeItem: (key: string) => {
      delete store[key];
    },
  };
})();
Object.defineProperty(window, "localStorage", { value: localStorageMock });

describe("useLogin Hook", () => {
  const mockNavigate = jest.fn();
  (useNavigate as jest.Mock).mockReturnValue(mockNavigate);

  beforeEach(() => {
    jest.clearAllMocks();
    localStorageMock.clear();
  });

  //handling input change
  test("should handle input change", () => {
    const { result } = renderHook(() => useLogin());
    const { handleChange } = result.current;

    act(() => {
      handleChange({
        target: { name: "email", value: "will@gmail.com" },
      } as React.ChangeEvent<HTMLInputElement>);
    });

    expect(result.current.loginDetails.email).toBe("will@gmail.com");
  });

  //making sure fields are not empty before making API call
  test("should show error if fields are empty", async () => {
    const { result } = renderHook(() => useLogin());
    const { handleSubmit } = result.current;

    await act(async () => {
      handleSubmit({
        preventDefault: () => {},
      } as React.FormEvent<HTMLFormElement>);
    });

    await new Promise((resolve) => setTimeout(resolve, 0));

    expect(
      toast.error("Please fill all fields.", {
        duration: 4000,
        style: {
          background: "#282828",
          color: "#fff",
        },
      })
    );

    expect(axios.get).not.toHaveBeenCalled();
  });

  //making api call when input are true
  test("should handle successful login", async () => {
    const mockUserData = {
      user: {
        email: "cookemullen@cogentry.com",
        firstName: "Vilma",
        lastName: "Berg",
        imageurl: "https://randomuser.me/api/portraits/men/75.jpg",
        token: "a88278c9-40eb-4e53-b6b5-ccb98ec7b76c",
        status: "success",
      },
    };
    (axios.get as jest.Mock).mockResolvedValue({ data: mockUserData });

    const navigate = jest.fn();
    jest
      .spyOn(require("react-router-dom"), "useNavigate")
      .mockReturnValue(navigate);

    const { result } = renderHook(() => useLogin());
    const { handleSubmit, handleChange } = result.current;

    act(() => {
      handleChange({
        target: { name: "email", value: "will@gmail.com" },
      } as React.ChangeEvent<HTMLInputElement>);
      handleChange({
        target: { name: "password", value: "password" },
      } as React.ChangeEvent<HTMLInputElement>);
    });

    await act(async () => {
      handleSubmit({
        preventDefault: () => {},
      } as React.FormEvent<HTMLFormElement>);
    });

    expect(localStorage.getItem("lendsqrCurrentUser"));

    expect(
      toast.success("Login successful!", {
        duration: 4000,
        style: {
          background: "#282828",
          color: "#fff",
        },
      })
    );

    expect(navigate("/dashboard/users"));
  });

  //should i catch any error while making a request
  test("should handle network error", async () => {
    const mockError = new Error("Network error");
    (axios.get as jest.Mock).mockRejectedValue(mockError);
    const { result } = renderHook(() => useLogin());
    const { handleSubmit, handleChange } = result.current;

    act(() => {
      handleChange({
        target: { name: "email", value: "will@gmail.com" },
      } as React.ChangeEvent<HTMLInputElement>);
      handleChange({
        target: { name: "password", value: "password" },
      } as React.ChangeEvent<HTMLInputElement>);
    });

    await act(async () => {
      handleSubmit({
        preventDefault: () => {},
      } as React.FormEvent<HTMLFormElement>);
    });

    expect(
      toast.error("Network error. Please try again later.", {
        duration: 4000,
        style: {
          background: "#282828",
          color: "#fff",
        },
      })
    );

    expect(localStorage.getItem("lendsqrCurrentUser")).toBeNull();

    expect(mockNavigate).not.toHaveBeenCalled();
  });
});
