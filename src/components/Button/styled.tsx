import styled from "styled-components";

export const ButtonStyled = styled.button`
  align-items: center;
  background-color: ${({ theme }) => theme.colors.primaryText};
  border-radius: ${({ theme }) => theme.borders.radius};
  border: 0;
  color: ${({ theme }) => theme.colors.textColor};
  display: inline-flex;
  font-weight: bold;
  justify-content: center;
  padding: ${({ theme }) => theme.paddings.base};
  text-transform: uppercase;
`;
