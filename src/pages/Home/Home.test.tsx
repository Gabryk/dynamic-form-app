import React from "react";
import { renderWithProviders } from "store/testUtility";
import Home from "./Home";
import ThemeProvider from "styles/ThemeProvider";

test("Render Home page", async () => {
  const { asFragment } = renderWithProviders(
    <ThemeProvider>
      <Home />
    </ThemeProvider>,
    {}
  );

  expect(asFragment()).toMatchSnapshot();
});
