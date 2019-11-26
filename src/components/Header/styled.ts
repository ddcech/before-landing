import styled from 'styled-components'
import { Link } from '@reach/router'

export const StyledHeader = styled.header`
  display: flex;
  justify-content: space-between;
  height: 10rem;
  padding: 4rem 10rem;
`

export const StyledNavigation = styled.header`
  display: flex;
  font-size: 2rem;
  letter-spacing: 0.1rem;
  line-height: 3rem;
`

export const StyledLink = styled(Link)`
  margin-left: 8rem;
  padding: 0.5rem 0.25rem;
`
