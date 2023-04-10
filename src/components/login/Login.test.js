import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { renderComponent, renderComponent1 } from "../../utils/test_helpers";
import Login from "./Login";
import { mockLoginData } from "./Mockdata";

const user = userEvent.setup();

describe("Login page", () => {
  test("should render initial login page", () => {
    render(renderComponent(<Login />));
    expect(screen.getByRole("heading", { name: "Login" })).toBeInTheDocument();

    expect(screen.getByRole("textbox", { name: "email" })).toBeInTheDocument();

    expect(screen.getByRole("button", { name: "Login" })).toBeInTheDocument();

    expect(screen.getByRole("link", { name: "Register" })).toBeInTheDocument();

    expect(screen.getByText("Email Id")).toBeInTheDocument();
    expect(screen.getByPlaceholderText("password")).toBeInTheDocument();
    expect(screen.getByPlaceholderText("email")).toBeInTheDocument();
  });

  test("should handle input changes in Login", async () => {
    render(renderComponent(<Login />));
    const email = screen.getByRole("textbox", { name: "email" });
    const password = screen.getByPlaceholderText("password");
    await user.type(email, mockLoginData.email);
    expect(email).toHaveValue(mockLoginData.email);

    await user.type(password, mockLoginData.password);
    expect(password).toHaveAttribute("type", "password");
    expect(password).toHaveValue(mockLoginData.password);
  });
  test("msw testing", async () => {
    let { store } = renderComponent1(<Login />);
    const email = screen.getByRole("textbox", { name: "email" });
    const password = screen.getByPlaceholderText("password");
    const button = screen.getByRole("button", { name: "Login" });
    await user.type(email, mockLoginData.email);
    //expect(email).toHaveValue(mockLoginData.email);

    await user.type(password, mockLoginData.password);
    // expect(password).toHaveAttribute("type", "password");
    //expect(password).toHaveValue(mockLoginData.password);

    await user.click(button);
    waitFor(() => {
      expect(store.getState().state.message).toBe("allow");
    });
  });

  test("should handle errors in Login", () => {
    render(renderComponent(<Login />));
    screen.logTestingPlaygroundURL();
    const email = screen.getByRole("textbox", { name: "email" });
    // const password = screen.getByPlaceholderText("password");

    user.click(
      screen.getByRole("button", {
        name: /login/i,
      })
    );
    let error = screen.findByText("Please fill in this field.");
    waitFor(() => {
      expect(error).toBeInTheDocument();
    });

    // password.focus();
    // await user.tab();
    // expect(screen.getByText("Password Required")).toBeInTheDocument();
  });

  test("Should Show Login Heading", async () => {
    render(renderComponent(<Login />));
    // const Heading = screen.getAllByText(/Login/i);
    // expect(Heading[0]).toBeInTheDocument();

    expect(screen.getByRole("heading", { name: "Login" })).toBeInTheDocument();
  });

  test("Matching the snapshot of the Login", async () => {
    const { asFragment } = render(renderComponent(<Login />));
    expect(asFragment()).toMatchSnapshot();
  });
});
