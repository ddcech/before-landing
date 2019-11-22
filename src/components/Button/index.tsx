import React, { ReactChildren, ButtonHTMLAttributes } from 'react'
import { StyledButton } from './styled'

interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  isPrimary: boolean;
  children: ReactChildren
}

const Button = ({ type, children, isPrimary = false }: IButtonProps) => (
  <StyledButton type={type} isPrimary={isPrimary}>
    {children}
  </StyledButton>
)

export default Button
