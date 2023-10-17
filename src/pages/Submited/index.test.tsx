import React from "react";
import { renderWithProviders } from "store/testUtility";
import Submited from ".";
import ThemeProvider from "styles/ThemeProvider";

const preloadedState = {
  userApplication: {
    loading: false,
    data: {
      email: "somefake@gmail.com",
      address1: "1187 Twin Willow Lane",
      city: "Wilmington",
      firstName: "Rosemary",
      jobTitle: "Engineer - lead",
      lastName: "J Jennings",
      phone: "910-520-1684",
      reason:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam",
      state: "North Carolina",
      zip: "28412",
    },
  },
};

test("Render Submitted page", async () => {
  const { asFragment } = renderWithProviders(
    <ThemeProvider>
      <Submited />
    </ThemeProvider>,
    {
      preloadedState,
    }
  );

  expect(asFragment()).toMatchSnapshot();
});
