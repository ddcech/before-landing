import React from 'react'
import PropTypes from 'prop-types'
import { Wrapper } from './styled'

const EndQuote = ({ text }) => (
  <Wrapper>
    <div>{text}</div>
  </Wrapper>
)

EndQuote.propTypes = {
  text: PropTypes.string,
}

EndQuote.defaultProps = {
  text: '',
}

export default EndQuote
