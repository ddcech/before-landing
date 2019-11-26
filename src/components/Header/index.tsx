import React from 'react'
import { StyledHeader, StyledNavigation, StyledLink } from './styled'
import { LogoIcon } from '../LogoIcon'
import Container from '../Container'

const Navigation = () => (
  <StyledNavigation>
    <StyledLink to="/work">work</StyledLink>
    <StyledLink to="/services">services</StyledLink>
    <StyledLink to="/about">about</StyledLink>
    <StyledLink to="/contact">contact</StyledLink>
  </StyledNavigation>
)

const Header = () => (
  <Container>
    <StyledHeader>
      <LogoIcon />
      <Navigation />
    </StyledHeader>
  </Container>
)

export default Header
