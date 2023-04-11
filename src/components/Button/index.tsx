import React from "react";
import { StyledButton } from "./index.style";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  testId?: string;
}

const Button: React.FC<ButtonProps> = ({
  onClick,
  children,
  style,
  testId,
}) => {
  return (
    <StyledButton style={style} onClick={onClick} data-testid="button">
      {children}
    </StyledButton>
  );
};

export default Button;
