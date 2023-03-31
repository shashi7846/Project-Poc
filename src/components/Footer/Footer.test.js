import { getAllByRole, render, screen } from "@testing-library/react";
import { renderComponent } from "../../utils/test_helpers";
import Footer from "./Footer";

describe("Footer Page", () => {
  test("should render Intial page", () => {
    render(renderComponent(<Footer />));
    const text = screen.getAllByText(
      /Welcome to M-Loan, your trusted source for mortgage loans./i
    );
    expect(text[0]).toBeInTheDocument();

    expect(
      screen.getByRole("heading", { name: /Search something/i })
    ).toBeInTheDocument();
    expect(
      screen.getByRole("heading", { name: /About Company/i })
    ).toBeInTheDocument();
  });
  test("should render intial page roles", () => {
    render(renderComponent(<Footer />));
    expect(
      screen.getByRole("link", { name: "M-Loan.com" })
    ).toBeInTheDocument();

    expect(screen.getByPlaceholderText("Search")).toBeInTheDocument();
  });
  test("should render correct business hours", () => {
    render(renderComponent(<Footer />));

    expect(screen.getByText("Mon - Fri:")).toBeInTheDocument();
  });
  test("should test snapshot", () => {
    //render( renderComponent(<Footer/>));
    const { asFragment } = render(renderComponent(<Footer />));
    expect(asFragment()).toMatchSnapshot();
  });
});
