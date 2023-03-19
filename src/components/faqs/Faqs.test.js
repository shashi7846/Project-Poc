import { render, screen } from "@testing-library/react";
import { renderComponent } from "../../utils/test_helpers";
import Faqs from "./Faqs";

describe("Faqs Page", () => {
  test("Initial render of Faqs page", () => {
    render(renderComponent(<Faqs />));
    expect(
      screen.getByRole("heading", { name: "Frequently Asked Questions" })
    ).toBeInTheDocument();
  });
});
