import React from 'react'
import PropTypes from 'prop-types'
import { StyledButton } from './styled'

const Button = ({ type, children, isPrimary }) => (
  <StyledButton type={type} isPrimary={isPrimary}>
    {children}
  </StyledButton>
)

Button.defaultProps = {
  isPrimary: false,
  type: 'button',
}

Button.propTypes = {
  children: PropTypes.node.isRequired,
  isPrimary: PropTypes.bool,
  type: PropTypes.string,
}

export default Button
