import { render, screen } from "@testing-library/react";
import { renderComponent } from "../../utils/test_helpers";
import Registrationform from "./form";

describe("howtoapply page", () => {
  test("intital render", () => {
    render(renderComponent(<Registrationform />));
    expect(screen.getAllByText(/Register/i)[0]).toBeInTheDocument();
  });
  test("Matching the snapshot of the Login", async () => {
    const { asFragment } = render(renderComponent(<Registrationform />));
    expect(asFragment()).toMatchSnapshot();
  });
});
