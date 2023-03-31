import { render, screen } from "@testing-library/react";
import { renderComponent } from "../../utils/test_helpers";
import Confirmpage from "./Confirmpage";

describe("Confirmpage", () => {
  test("Initial render", () => {
    render(renderComponent(<Confirmpage />));
    expect(
      screen.getByRole("heading", { name: "Congratulations" })
    ).toBeInTheDocument();
  });
  test("Matching the snapshot of the navbar", async () => {
    const { asFragment } = render(renderComponent(<Confirmpage />));
    expect(asFragment()).toMatchSnapshot();
  });
});
