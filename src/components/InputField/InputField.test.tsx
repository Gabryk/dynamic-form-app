import React from "react";
import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import Input from "./InputField";
import { renderWithProviders } from "store/testUtility";
import ThemeProvider from "styles/ThemeProvider";

test("loads with label", async () => {
  const onChange = jest.fn();

  renderWithProviders(
    <ThemeProvider>
      <Input
        onChange={onChange}
        type="text"
        name="testField"
        label="test label"
      />
    </ThemeProvider>
  );

  expect(
    screen.getByRole("textbox", { name: /test label/i })
  ).toBeInTheDocument();
});

test("displays error message", async () => {
  const onChange = jest.fn();

  renderWithProviders(
    <ThemeProvider>
      <Input
        onChange={onChange}
        type="text"
        name="testField"
        label="test label"
        error="some error"
      />
    </ThemeProvider>
  );

  expect(screen.getByRole("alert")).toBeInTheDocument();
});
