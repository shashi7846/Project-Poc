import { render, screen } from "@testing-library/react";
import { renderComponent } from "../../utils/test_helpers";
import Home from "./Home";

describe("Home page", () => {
  test("Should Render Intial Page", () => {
    render(renderComponent(<Home />));
    const text1 = screen.getAllByText(/M-Loan/i);
    expect(text1[0]).toBeInTheDocument();
    const text2 = screen.getAllByText(
      /to estimate the EMI amount payable per month to repay the Mortage/i
    );
    expect(text2[0]).toBeInTheDocument();
  });
  test("should test Intial page buttons", () => {
    render(renderComponent(<Home />));
    expect(
      screen.getByRole("button", { name: "Register" })
    ).toBeInTheDocument();
    expect(screen.getByRole("button", { name: "Login" })).toBeInTheDocument();
  });
});
