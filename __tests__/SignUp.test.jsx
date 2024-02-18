import React from "react";
import { fireEvent, render, waitFor } from "@testing-library/react-native";
import SignUp from "../screens/SignUpScreen";

// Mocking modules and components
jest.mock("@expo/vector-icons", () => ({
  FontAwesome: "FontAwesome",
  Ionicons: "Ionicons",
  MaterialIcons: "MaterialIcons",
}));
jest.mock("@react-navigation/native", () => ({
  useNavigation: () => ({
    navigate: jest.fn(),
  }),
}));
jest.mock("moment", () => () => ({ format: () => "January, 1st 2020" }));
jest.mock(
  "react-native-keyboard-aware-scroll-view",
  () => "KeyboardAwareScrollView"
);
jest.mock("@react-native-community/datetimepicker", () => "DateTimePicker");
jest.mock("../components/Loader", () => "Loader");

jest.mock("../utils", () => ({
  getAndroidPlatform: jest.fn(),
}));

describe("SignUp Screen", () => {
  const mockNavigate = jest.fn();
  const mockAndroidPlatform = require("../utils").getAndroidPlatform;

  beforeEach(() => {
    mockNavigate.mockClear();
    mockAndroidPlatform.mockClear();
  });

  it("renders correctly", () => {
    const { getByText } = render(<SignUp />);
    expect(getByText("Welcome to your customer's bank")).toBeTruthy();
  });

  it("allows users to enter their information", () => {
    const { getByPlaceholderText } = render(<SignUp />);

    fireEvent.changeText(getByPlaceholderText("Enter your BVN"), "1234567890");
    fireEvent.changeText(getByPlaceholderText("First Name"), "John");
    fireEvent.changeText(getByPlaceholderText("Last Name"), "Doe");
  });

  it("validates BVN before submission", async () => {
    const { getByPlaceholderText, getByText } = render(<SignUp />);

    fireEvent.changeText(getByPlaceholderText("Enter your BVN"), "12345");
    fireEvent.press(getByText("Continue"));

    await waitFor(() => {
      expect(getByText("BVN must be at least 10 characters")).toBeTruthy();
    });
  });

  it("navigates to the Main screen on successful submission", async () => {
    const { getByPlaceholderText, getByText } = render(<SignUp />);

    fireEvent.changeText(getByPlaceholderText("Enter your BVN"), "1234567890");
    fireEvent.changeText(getByPlaceholderText("First Name"), "John");
    fireEvent.changeText(getByPlaceholderText("Last Name"), "Doe");

    fireEvent.press(getByText("Continue"));

    await waitFor(() => {
      expect(mockNavigate).toHaveBeenCalledWith("Main");
    });
  });
});
