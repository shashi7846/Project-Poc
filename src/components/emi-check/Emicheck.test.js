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
    //screen.logTestingPlaygroundURL();
    // const Property = screen.getByRole("spinbutton", {
    //   name: /enter property price/i,
    // });

    //await user.type(Property, mockLoginData.PropertyPrice);
    //screen.logTestingPlaygroundURL();

    //expect(Property).toHaveValue(mockLoginData.PropertyPrice);
    const Interest = screen.getByRole("spinbutton", {
      name: /interest/i,
    });
    await user.type(Interest, mockLoginData.InterestRate);
    expect(Interest).toHaveValue(mockLoginData.InterestRate);

    // const loanamount = screen.getByPlaceholderText(/enter loan amount/i);
    // await user.type(loanamount, mockLoginData.LoanAmount);
    // expect(loanamount).toHaveAttribute("type", "number");
    // expect(loanamount).toHaveValue(mockLoginData.LoanAmount);
  });

  test("Matching the snapshot of the navbar", async () => {
    const { asFragment } = render(renderComponent(<Emichecktest />));
    expect(asFragment()).toMatchSnapshot();
  });
});
