import React from 'react'
import Container from '../Container'
import theme from '../../styles/theme'
import styled from 'styled-components'
import { SectionWrap } from '../SectionWrap'
import { LogoIcon } from '../LogoIcon'
import { Link } from 'gatsby'

export const StyledFooter = styled.div`
  padding-top: 8rem;
  padding-bottom: 8rem;
  background: ${theme.colors.grey};
`

const ActionSection = styled.div`
  margin-top: 12rem;
  font-size: 4rem;
  margin-bottom: 20rem;
`

const FooterActionTitle = styled.div`
  font-size: 4rem;
`

const FooterAction = styled.div`
  color: ${theme.colors.primary};
`

const FooterFoot = styled.div`
  display: flex;
`

const FooterLogo = styled.div`
  
`

const FooterNav = styled.div`
  display: flex;
`

export const StyledNavigation = styled.header`
  display: flex;
  font-size: 2rem;
  letter-spacing: 0.1rem;
  line-height: 3rem;
  color: ${theme.colors.black};
`

export const StyledLink = styled(Link)`
  margin-left: 8rem;
  padding: 0.5rem 0.25rem;
`


const Navigation = () => (
  <StyledNavigation>
    <StyledLink to="/work">work</StyledLink>
    <StyledLink to="/services">services</StyledLink>
    <StyledLink to="/about">about</StyledLink>
    <StyledLink to="/contact">contact</StyledLink>
  </StyledNavigation>
)

const Footer = () => (
  <StyledFooter>
    <Container>
      <SectionWrap>
        <ActionSection>
          <FooterActionTitle>What can we help you with?</FooterActionTitle>
          <FooterAction>see our services -></FooterAction>
        </ActionSection>
        <FooterFoot>
          <FooterLogo><LogoIcon /></FooterLogo>
          <FooterNav><Navigation /></FooterNav>
        </FooterFoot>
      </SectionWrap>
    </Container>
  </StyledFooter>
)

export default Footer
