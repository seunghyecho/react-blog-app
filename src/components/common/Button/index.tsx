import React from 'react';
import styled from 'styled-components';
import palette from '@/lib/styles/palette';

interface ButtonProp {
  type?: 'button' | 'submit' | 'reset';
  label: string;
  className?: string;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  props: any;
}

const StyledButton = styled.button`
  padding: 5px 10px;
  border-radius: 30px;
  border: 1px solid ${palette.gray[0]};;
  color: ${palette.gray[0]};
  font-size: 10px;

  background: ${palette.gray[8]};
  &:hover {
    background: ${palette.gray[6]};
  }
`;

function Button({ type, label, className, onClick, props }: ButtonProp) {
  return (
    <StyledButton type={type} onClick={onClick} className={className} {...props}>
      {label}
    </StyledButton>
  );
}

export default Button;
