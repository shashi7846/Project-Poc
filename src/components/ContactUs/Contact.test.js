import { render, screen } from "@testing-library/react";
import { renderComponent } from "../../utils/test_helpers";
import Contactus from "./Contactus";

describe("Contact page", () => {
  test("Intital render", () => {
    render(renderComponent(<Contactus />));
    expect(
      screen.getByRole("heading", { name: "Contact-Us" })
    ).toBeInTheDocument();

    expect(screen.getByRole("textbox", { name: "email" })).toBeInTheDocument();

    expect(screen.getByPlaceholderText("Message")).toBeInTheDocument();
  });
});
