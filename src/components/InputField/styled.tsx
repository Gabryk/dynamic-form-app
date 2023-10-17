import styled from "styled-components";
import { fieldStyled } from "styles/Global";

export const ErrorStyled = styled.p`
  font-size: 0.8em;
`;

export const LabelStyled = styled.label`
  font-size: 1rem;
  font-weight: 500;
  text-transform: capitalize;
`;
export const RequiredAsterisk = styled.span`
  color: ${({ theme }) => theme.colors.warning};
`;
interface ContainerProps {
  error: boolean;
}

export const ContainerStyled = styled.div.withConfig<ContainerProps>({
  shouldForwardProp: (prop) => !["error"].includes(prop),
})`
  display: flex;
  flex-direction: column;
  color: ${({ theme, error }) =>
    error ? theme.colors.errorText : theme.colors.primaryText};
`;

export const InputStyled = styled.input`
  background: white;
  color: ${({ theme }) => theme.colors.textColor};
  ${fieldStyled}
`;
