import React from 'react'
import { Wrapper } from './styled'

const Quote = ({ text } : { text: string }) => (
  <Wrapper>
    <div>{text && text}</div>
  </Wrapper>
)

export default Quote
