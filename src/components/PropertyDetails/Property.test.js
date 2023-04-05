import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { renderComponent } from "../../utils/test_helpers";
import { mockLoginData } from "./Mockdata";

import PropertyDetails from "./PropertyDetails";
const user = userEvent.setup();
describe("property page", () => {
  test("should render Intial page", async () => {
    render(renderComponent(<PropertyDetails />));
    const pincode = screen.getByPlaceholderText("Pincode");
    await user.type(pincode, mockLoginData.pincode);
    expect(pincode).toHaveAttribute("type", "number");
    expect(pincode).toHaveValue(mockLoginData.number);
    // const Heading = screen.getByText(/address/i);
    // expect(Heading[0]).toBeInTheDocument();

    expect(screen.getByText("PropertyDetails")).toBeInTheDocument();
  });
  test("should render Intial paged", async () => {
    render(renderComponent(<PropertyDetails />));
    const pincode = screen.getByPlaceholderText("Pincode");
    await user.type(pincode, mockLoginData.pincode);
    expect(pincode).toHaveAttribute("type", "number");
    expect(pincode).toHaveValue(mockLoginData.number);
    // const Heading = screen.getByText(/address/i);
    // expect(Heading[0]).toBeInTheDocument();
    const Address = screen.getByPlaceholderText("Enter your address");
    await user.type(Address, mockLoginData.address);
    expect(Address).toHaveAttribute("type", "text");
    expect(Address).toHaveValue(mockLoginData.address);

    const Yards = screen.getByPlaceholderText("Enter Area in square Yards");
    await user.type(Yards, mockLoginData.area);
    expect(Yards).toHaveAttribute("type", "text");
    expect(Yards).toHaveValue(mockLoginData.area);

    // const Yards1 = screen.getByRole("textbox", { name: "area" });
    // await user.type(Yards, mockLoginData.area);
    // expect(Yards1).toHaveValue(mockLoginData.area);

    // const Address1 = screen.getByRole("textbox", { name: "address" });
    // await user.type(Address1, mockLoginData.address);
    // expect(Address1).toHaveValue(mockLoginData.address);
  });
  test("Matching the snapshot of the propertydetails page", async () => {
    const { asFragment } = render(renderComponent(<PropertyDetails />));
    expect(asFragment()).toMatchSnapshot();
  });
});
