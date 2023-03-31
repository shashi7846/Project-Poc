import { render, screen } from "@testing-library/react";
import { renderComponent } from "../../utils/test_helpers";
import Emichecktest from "./Emicheck";

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

  test("Matching the snapshot of the navbar", async () => {
    const { asFragment } = render(renderComponent(<Emichecktest />));
    expect(asFragment()).toMatchSnapshot();
  });
});
