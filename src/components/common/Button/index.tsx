import React from "react";
import styled from "styled-components";

interface ButtonProp {
  type?: "button" | "submit" | "reset";
  label: string;
  className?: string;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

const ButtonStyle = styled.button`
  padding: 5px 10px;
  border-radius: 30px;
  border: 1px solid #619ffb;
  color: #619ffb;
  font-size: 10px;
`;

function Button({ type, label, className, onClick }: ButtonProp) {
  return (
    <ButtonStyle type={type} onClick={onClick} className={className}>
      {label}
    </ButtonStyle>
  );
}

export default Button;
