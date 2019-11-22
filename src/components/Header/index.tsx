import React from 'react'
import Social from '../Social'
import { Wrapper, Name, Intro, SocialWrap } from './styled'

interface IHeaderProps {
  title: string
  intro: string
  social: []
}

const Header = ({ title = '', intro = '', social = [] }: IHeaderProps) => (
  <Wrapper>
    <Name>{title && title}</Name>
    <Intro>{intro && intro }</Intro>

    {social.length > 0 &&
      <SocialWrap>
        <Social networks={social} />
      </SocialWrap>
    }

  </Wrapper>
)

export default Header
