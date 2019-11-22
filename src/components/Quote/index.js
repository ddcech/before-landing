import React from 'react'
import { Wrapper } from './styled'

const Quote = ({ text }) => (
  <Wrapper>
    <div>{text && text}</div>
  </Wrapper>
)

export default Quote
