import { render, screen } from "@testing-library/react";
import { renderComponent } from "../../utils/test_helpers";
import About from "./About";

describe("Confirmpage", () => {
  test("Initial render", () => {
    render(renderComponent(<About />));
    expect(
      screen.getByRole("heading", { name: "About Us" })
    ).toBeInTheDocument();
  });
});
