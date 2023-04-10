import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import {
  renderComponent,
  renderComponentwithRouterPath,
} from "../../utils/test_helpers";
import { mockLoginData } from "./Mockdata";

import PropertyDetails from "./PropertyDetails";
import Emicheck from "../emi-check/Emicheck";

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

    const Yards1 = screen.getByRole("textbox", { name: "area" });
    await user.type(Yards1, mockLoginData.area);
    expect(Yards1).toHaveValue(mockLoginData.area);

    const Address1 = screen.getByRole("textbox", { name: "address" });
    await user.type(Address1, mockLoginData.address);
    expect(Address1).toHaveValue(mockLoginData.address);
  });

  test("msw testing", async () => {
    renderComponentwithRouterPath(<PropertyDetails />, "/propertydetails", [
      { path: "/emicheck", element: <Emicheck /> },
    ]);

    const pincode = screen.getByPlaceholderText("Pincode");

    const Yards1 = screen.getByRole("textbox", { name: "area" });
    const Address1 = screen.getByRole("textbox", { name: "address" });

    const button = screen.getByRole("button", { name: "Submit" });
    await user.type(pincode, mockLoginData.pincode);

    await user.type(Yards1, mockLoginData.area);
    await user.type(Address1, mockLoginData.address);

    await user.click(button);
    waitFor(() => {
      expect(screen.getByText("Check Emi")).toBeInTheDocument();
    });
  });

  test("render properties", async () => {
    render(renderComponent(<PropertyDetails />));
    const properties = await screen.findAllByRole("textbox");
    expect(properties).toHaveLength(2);
  });
  test("Matching the snapshot of the propertydetails page", async () => {
    const { asFragment } = render(renderComponent(<PropertyDetails />));
    expect(asFragment()).toMatchSnapshot();
  });
});
