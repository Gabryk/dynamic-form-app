import styled, { css } from "styled-components";
import { device } from "styles/BreakPoits";

export const FielGroupContainer = styled.div`
  display: grid;
  gap: ${({ theme }) => theme.paddings.base};
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));

  @media ${device.sm} {
    grid-template-columns: 1fr;
  }
`;

interface DynamicFormProps {
  loading?: boolean;
}
export const DynamicFormContainer = styled.div.withConfig<DynamicFormProps>({
  shouldForwardProp: (prop) => prop !== "loading",
})`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.paddings.base};
  padding: ${({ theme }) => theme.paddings.base};
  position: relative;

  &:before,
  &:after {
    content: "";
    display: none;
    position: absolute;
    justify-content: center;
    align-items: center;
  }
  &:before {
    background-color: #80808094;
    ${({ theme }) => css`
      min-width: calc(100% - ${theme.paddings.base}*2);
      height: calc(100% - ${theme.paddings.base}*2);
    `}
  }
  &:after {
    margin: auto;
    border: 8px solid #eaf0f6;
    border-radius: 50%;
    ${({ theme }) => css`
      border-top: 8px solid ${theme.colors.primaryText};
    `}
    width: 50px;
    height: 50px;
    animation: spinner 1s linear infinite;
    left: calc(50% - 25px);
    top: calc(50% - 25px);
  }

  @keyframes spinner {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }

  ${({ loading }) =>
    loading &&
    css`
      &:before,
      &:after {
        display: inline;
      }
    `}
`;

export default DynamicFormContainer;
