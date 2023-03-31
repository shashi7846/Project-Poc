import { render, screen } from "@testing-library/react";
import { renderComponent } from "../../utils/test_helpers";
import Howtoapplytest from "./Howtoapply";
describe("howtoapply page", () => {
  test("intital render", () => {
    render(renderComponent(<Howtoapplytest />));
    expect(screen.getByText("How To Apply")).toBeInTheDocument();
  });

  test("should test snapshot", () => {
    const { asFragment } = render(renderComponent(<Howtoapplytest />));
    expect(asFragment()).toMatchSnapshot();
  });
});
