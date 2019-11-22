import React from 'react'
import PropTypes from 'prop-types'
import ReactMarkdown from 'react-markdown'
import Container from '../Container'
import { Wrapper, StyledAboutText } from './styled'

const About = ({ text }) => (
  <Container>
    <Wrapper>
      <StyledAboutText>{<ReactMarkdown source={text} />}</StyledAboutText>
    </Wrapper>
  </Container>
)

About.propTypes = {
  text: PropTypes.string,
}

About.defaultProps = {
  text: '',
}

export default About
