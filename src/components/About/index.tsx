import React from 'react'
import ReactMarkdown from 'react-markdown'
import Container from '../Container'
import { Wrapper, StyledAboutText } from './styled'

interface IAboutProps {
  text: string;
}

const About = ({ text = '' }: IAboutProps) => (
  <Container>
    <Wrapper>
      <StyledAboutText>{<ReactMarkdown source={text} />}</StyledAboutText>
    </Wrapper>
  </Container>
)

export default About
