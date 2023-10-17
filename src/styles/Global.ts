import { css } from "styled-components";

export const fieldStyled = css`
  border-color: ${({ theme }) => theme.colors.borderColor};
  border-radius: ${({ theme }) => theme.borders.radius};
  border-style: solid;
  border-width: ${({ theme }) => theme.borders.width};
  padding: ${({ theme }) => theme.paddings.base};
`;
