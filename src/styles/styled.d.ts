import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    borders: {
      radius: string;
      width: string;
    };
    colors: {
      borderColor: string;
      errorText: string;
      primaryText: string;
      secondaryText: string;
      textColor: string;
      warning: string;
    };
    paddings: {
      base: string;
    };
  }
}
