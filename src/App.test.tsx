import React from "react";
import { renderWithProviders } from "store/testUtility";
import App from "./App";

test("renders learn react link", () => {
  const { asFragment } = renderWithProviders(<App />);
  expect(asFragment()).toMatchSnapshot();
});
