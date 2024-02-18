import React from "react";
import { fireEvent, render, waitFor } from "@testing-library/react-native";
import { SignIn } from "../screens/index";

// Mocking modules
jest.mock("@react-navigation/native", () => {
  return {
    useNavigation: () => ({
      navigate: jest.fn(),
    }),
  };
});

jest.mock("../utils", () => ({
  validateEmail: jest.fn(),
  getAndroidPlatform: jest.fn(),
}));

// Mocking external components
jest.mock(
  "react-native-keyboard-aware-scroll-view",
  () => "KeyboardAwareScrollView"
);
jest.mock("../components/Loader", () => "Loader");

describe("SignIn Screen", () => {
  const mockNavigate = jest.fn();
  const mockValidateEmail = require("../utils").validateEmail;
  const mockAndroidPlatform = require("../utils").getAndroidPlatform;

  beforeEach(() => {
    // Clear all instances and calls to constructor and all methods:
    mockNavigate.mockClear();
    mockValidateEmail.mockClear();
    mockAndroidPlatform.mockClear();
  });

  it("renders correctly", () => {
    const { getByText } = render(<SignIn />);
    expect(getByText("Login with your credentials")).toBeTruthy();
  });

  it("validates email and password fields correctly", async () => {
    const { getByPlaceholderText, getByText } = render(<SignIn />);

    fireEvent.changeText(getByPlaceholderText("Email"), "invalidemail");
    fireEvent.changeText(getByPlaceholderText("Password"), "123");

    // Mocking validateEmail function to return false for invalid email
    mockValidateEmail.mockReturnValueOnce(false);

    fireEvent.press(getByText("Continue"));

    await waitFor(() => {
      expect(getByText("Invalid email format")).toBeTruthy();
      expect(getByText("Password must be at least 6 characters")).toBeTruthy();
    });
  });

  it("navigates to the Main screen on successful submission", async () => {
    const { getByPlaceholderText, getByText } = render(<SignIn />);

    fireEvent.changeText(getByPlaceholderText("Email"), "test@example.com");
    fireEvent.changeText(getByPlaceholderText("Password"), "123456");

    // Mocking validateEmail function to return true for valid email
    mockValidateEmail.mockReturnValueOnce(true);

    fireEvent.press(getByText("Continue"));

    await waitFor(() => {
      expect(mockNavigate).toHaveBeenCalledWith("Main");
    });
  });
});
