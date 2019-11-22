import React from 'react'
import PropTypes from 'prop-types'
import Social from '../Social'
import { Wrapper, Name, Intro, SocialWrap } from './styled'

const Header = ({ title, intro, social }) => (
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

Header.propTypes = {
  intro: PropTypes.string,
  social: PropTypes.array,
  title: PropTypes.string,
}

Header.defaultProps = {
  title: '',
  intro: '',
  social: [],
}

export default Header
