import "@testing-library/jest-dom";

Object.defineProperty(window, "localStorage", {
  value: {
    store: {} as Record<string, string>,
    getItem: jest.fn(function (key: string) {
      return this.store[key] || null;
    }),
    setItem: jest.fn(function (key: string, value: string) {
      this.store[key] = value;
    }),
    removeItem: jest.fn(function (key: string) {
      delete this.store[key];
    }),
    clear: jest.fn(function () {
      this.store = {};
    }),
  },
  writable: true,
});

global.console.error = jest.fn();

jest.mock("axios");

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: jest.fn(),
}));

jest.mock("react-hot-toast", () => ({
  error: jest.fn(),
  success: jest.fn(),
}));
