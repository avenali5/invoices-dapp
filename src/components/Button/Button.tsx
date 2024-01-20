import React from "react";
import { ButtonStyle } from "./Button.style";

type Props = {
  children: React.ReactNode | React.ReactNode[];
  onClick: () => void;
};

const Button = ({ children, onClick }: Props) => {
  return (
    <ButtonStyle className='main-button pointer' onClick={onClick}>
      {children}
    </ButtonStyle>
  );
};

export default Button;
