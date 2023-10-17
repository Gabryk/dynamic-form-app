import React from "react";
import { renderWithProviders } from "store/testUtility";
import ApplicationForm from ".";
import ThemeProvider from "styles/ThemeProvider";
import { screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { validationErrors } from "constants/messages";

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

test("Submit ApplicationForm fail validations", async () => {
  const submitMock = jest.fn();

  renderWithProviders(
    <ThemeProvider>
      <ApplicationForm onSubmit={submitMock} isLoading={false} />
    </ThemeProvider>,
    {
      preloadedState,
    }
  );

  const field = screen.getByRole("textbox", { name: /Email/i });
  userEvent.type(field, "notvaid@cv.c");
  userEvent.click(screen.getByRole("button"));
  expect(
    await screen.findAllByText(validationErrors.invalidFormat)
  ).toBeDefined();
  expect(submitMock).not.toBeCalled();
});

test("Submit ApplicationForm", async () => {
  const submitMock = jest.fn();

  renderWithProviders(
    <ThemeProvider>
      <ApplicationForm onSubmit={submitMock} isLoading={false} />
    </ThemeProvider>,
    {
      preloadedState,
    }
  );

  const data = preloadedState.userApplication.data;

  userEvent.type(
    screen.getByRole("textbox", { name: /First Name/i }),
    data.firstName
  );
  userEvent.type(
    screen.getByRole("textbox", { name: /Last Name/i }),
    data.lastName
  );
  userEvent.type(screen.getByRole("textbox", { name: /phone/i }), data.phone);
  userEvent.type(screen.getByRole("textbox", { name: /email/i }), data.email);

  userEvent.click(screen.getByRole("button"));

  await waitFor(() => expect(submitMock).toBeCalled());
});
