import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { renderComponent } from "../../utils/test_helpers";
import Emichecktest from "./Emicheck";
import { mockLoginData } from "./Mockdata";

const user = userEvent.setup();

describe("emicheck page", () => {
  test("intial rendering", () => {
    render(renderComponent(<Emichecktest />));
    expect(screen.getByText("Check Emi")).toBeInTheDocument();
    expect(screen.getByText("LoanAmount")).toBeInTheDocument();
    expect(screen.getByText("PropertyPrice")).toBeInTheDocument();
    expect(
      screen.getByPlaceholderText("Enter property price")
    ).toBeInTheDocument();
  });

  test("intial rendering the links", () => {
    render(renderComponent(<Emichecktest />));
    expect(screen.getByRole("link", { name: "Back" })).toBeInTheDocument();
    expect(screen.getByRole("link", { name: "Close" })).toBeInTheDocument();
  });

  test("should handle input changes in property", async () => {
    render(renderComponent(<Emichecktest />));
    screen.logTestingPlaygroundURL();

    const Property = screen.getByPlaceholderText(/enter property price/i);
    await user.type(Property, mockLoginData.PropertyPrice);
    expect(Property).toHaveValue(+mockLoginData.PropertyPrice);

    const Interest = screen.getByRole("spinbutton", {
      name: /interest/i,
    });
    expect(Interest).toHaveValue(9.5);

    const loanamount = screen.getByPlaceholderText(/enter loan amount/i);
    await user.type(loanamount, mockLoginData.LoanAmount);
    expect(loanamount).toHaveValue(+mockLoginData.LoanAmount);

    const netincome = screen.getByPlaceholderText(/net income per month/i);
    await user.type(netincome, mockLoginData.netIncome);
    expect(netincome).toHaveValue(+mockLoginData.netIncome);
  });

  test("Matching the snapshot of the navbar", async () => {
    const { asFragment } = render(renderComponent(<Emichecktest />));
    expect(asFragment()).toMatchSnapshot();
  });
});
