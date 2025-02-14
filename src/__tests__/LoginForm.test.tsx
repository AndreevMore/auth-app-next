import { render, screen, fireEvent } from "@testing-library/react";
import { useRouter } from "next/navigation";
import { useAuth } from "@/context/AuthContext";
import LoginForm from "@/components/LoginForm/LoginForm";

jest.mock("next/navigation", () => ({
  useRouter: jest.fn(),
}));

jest.mock("@/context/AuthContext", () => ({
  useAuth: jest.fn(),
}));

describe("LoginForm", () => {
  let loginMock: jest.Mock;
  let routerMock: { push: jest.Mock };

  beforeEach(() => {
    loginMock = jest.fn();
    (useAuth as jest.Mock).mockReturnValue({ login: loginMock });

    routerMock = { push: jest.fn() };
    (useRouter as jest.Mock).mockReturnValue(routerMock);
  });

  test("should render the form correctly", () => {
    render(<LoginForm />);

    expect(screen.getByLabelText(/name/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/email/i)).toBeInTheDocument();
    expect(screen.getByRole("button", { name: /log in/i })).toBeInTheDocument();
  });

  test("should validate the form", async () => {
    render(<LoginForm />);
    fireEvent.click(screen.getByRole("button", { name: /log in/i }));

    expect(await screen.findByText(/name is required/i)).toBeInTheDocument();
    expect(await screen.findByText(/email is required/i)).toBeInTheDocument();
  });
});
