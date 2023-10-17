import { ButtonHTMLAttributes } from "react";
import { ButtonStyled } from "./styled";

const Button = ({ children }: ButtonHTMLAttributes<HTMLButtonElement>) => (
  <ButtonStyled>{children}</ButtonStyled>
);

export default Button;
