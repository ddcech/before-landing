import React from 'react'
import PropTypes from 'prop-types'
import MetaHead from '../MetaHead'
import { Wrap } from './styled'

const Layout = ({ children }) => (
  <Wrap>
    <MetaHead />
    {children}
  </Wrap>
)

Layout.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
}

export default Layout
