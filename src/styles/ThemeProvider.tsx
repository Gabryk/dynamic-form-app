import { ThemeProvider as Provider } from "styled-components";
import theme from "styles/Theme";
import { PropsWithChildren } from "react";

const ThemeProvider = ({ children }: PropsWithChildren) => {
  return <Provider theme={theme}>{children}</Provider>;
};

export default ThemeProvider;
