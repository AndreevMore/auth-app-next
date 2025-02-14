import { render, screen } from "@testing-library/react";
import { UserProvider, useAuth } from "@/context/AuthContext";
import { ReactNode } from "react";
import { act } from "react";

jest.mock("@/types/types", () => ({
  AuthContextType: jest.fn(),
  User: jest.fn(),
}));

const TestComponent = ({ children }: { children?: ReactNode }) => {
  const { user, login, logout } = useAuth();

  return (
    <div>
      <p data-testid="user">{user ? user.name : "No user"}</p>
      <button
        onClick={() => login({ id: "1", name: "JaneD.", email: "jane@d.com" })}
      >
        Login
      </button>
      <button onClick={logout}>Logout</button>
      {children}
    </div>
  );
};

describe("AuthContext", () => {
  beforeEach(() => {
    localStorage.clear();
  });

  test("Should provide context with user, login, and logout.", () => {
    render(
      <UserProvider>
        <TestComponent />
      </UserProvider>
    );

    expect(screen.getByTestId("user")).toHaveTextContent("No user");
  });

  test("save user and set data to localStorage", () => {
    render(
      <UserProvider>
        <TestComponent />
      </UserProvider>
    );

    act(() => {
      screen.getByText("Login").click();
    });

    expect(screen.getByTestId("user")).toHaveTextContent("JaneD.");
    expect(localStorage.getItem("user")).toBe(
      JSON.stringify({ id: "1", name: "JaneD.", email: "jane@d.com" })
    );
  });

  test("user logout and cleanup localStorage", () => {
    render(
      <UserProvider>
        <TestComponent />
      </UserProvider>
    );

    act(() => {
      screen.getByText("Login").click();
    });

    act(() => {
      screen.getByText("Logout").click();
    });

    expect(screen.getByTestId("user")).toHaveTextContent("No user");
    expect(localStorage.getItem("user")).toBeNull();
  });

  test("throws error if out of context of UserProvider", () => {
    const consoleError = jest
      .spyOn(console, "error")
      .mockImplementation(() => {});

    expect(() => render(<TestComponent />)).toThrow(
      "useAuth must be used within a UserProvider"
    );

    consoleError.mockRestore();
  });
});
