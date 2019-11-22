import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

const MetaHead = ({ title, description }) => (
  <Helmet>
    <title>{title}</title>
    <meta name="description" content={description} />
    <meta property="og:image" content="/static/assets/banner.jpg" />
    <meta property="og:image:width" content="1200" />
    <meta property="og:image:height" content="628" />
    <meta property="og:title" content={title} />
    <meta property="og:description" content={description} />
    <meta name="twitter:card" content="summary_large_image" />
  </Helmet>
)

MetaHead.defaultProps = {
  title: 'Portfolio',
  description: 'My lifes greates achievements',
}

MetaHead.propTypes = {
  description: PropTypes.string,
  title: PropTypes.string,
}

export default MetaHead
