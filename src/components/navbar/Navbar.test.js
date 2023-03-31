import { render, screen } from "@testing-library/react";
import { renderComponent } from "../../utils/test_helpers";
import Navbar from "./Navbar";

describe("render Navbar", () => {
  test("render intial navbar page links", () => {
    render(renderComponent(<Navbar />));
    expect(screen.getByRole("link", { name: /-Loan/i })).toBeInTheDocument();
    expect(screen.getByRole("link", { name: /Home/i })).toBeInTheDocument();
    expect(
      screen.getByRole("link", { name: /How to Apply/i })
    ).toBeInTheDocument();
    expect(screen.getByRole("link", { name: /Services/i })).toBeInTheDocument();
    expect(screen.getByRole("link", { name: /About/i })).toBeInTheDocument();
    expect(screen.getByRole("link", { name: /FAQS/i })).toBeInTheDocument();
    expect(screen.getByRole("link", { name: /Register/i })).toBeInTheDocument();
  });
  test("render Navbar with Icon", () => {
    render(renderComponent(<Navbar />));
    expect(screen.getByRole("img", { name: /favicon/i })).toBeInTheDocument();
  });

  test("Matching the snapshot of the navbar", async () => {
    const { asFragment } = render(renderComponent(<Navbar />));
    expect(asFragment()).toMatchSnapshot();
  });
});
