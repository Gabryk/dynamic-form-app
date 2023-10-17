import styled from "styled-components";

export const ErrorMessage = styled.div`
  padding-inline: ${({ theme }) => theme.paddings.base};
  color: ${({ theme }) => theme.colors.errorText};
`;
