import React from 'react'
import PropTypes from 'prop-types'
import ReactMarkdown from 'react-markdown'
import Container from '../Container'
import { Wrapper, StyledAboutText } from './styled'

const EndNote = ({ text }: { text: string }) => (
  <Container>
    <Wrapper>
      <StyledAboutText>
        {<ReactMarkdown source={text} />}
      </StyledAboutText>
    </Wrapper>
  </Container>
)

EndNote.propTypes = {
  text: PropTypes.string,
}

EndNote.defaultProps = {
  text: '',
}


export default EndNote
