import React from 'react'
import { Wrapper } from './styled'

const EndQuote = ({ text = '' } : { text: string }) => (
  <Wrapper>
    <div>{text}</div>
  </Wrapper>
)

export default EndQuote
