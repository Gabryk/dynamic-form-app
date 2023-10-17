import { HeaderStyled } from "./styled";

interface HeaderProps {
  title: string;
  description?: string;
}
export const Header = ({ title, description }: HeaderProps) => {
  return (
    <HeaderStyled>
      <h1>{title}</h1>
      {description && <p>{description}</p>}
    </HeaderStyled>
  );
};

export default Header;
