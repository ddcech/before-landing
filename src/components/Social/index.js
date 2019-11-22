import React from 'react'
import PropTypes from 'prop-types'
import { Ul, Li, Link } from './styled'
import networkIcons from './networkIcons'

const Social = ({ networks }) => (
  <Ul>
    {networks.map(n => (
      <Li key={n.network}>
        <Link target="_blank" rel="noopener noreferrer" href={n.link}>
          {networkIcons[n.network]}
        </Link>
      </Li>
    ))}
  </Ul>
)

Social.propTypes = {
  networks: PropTypes.array.isRequired,
}

export default Social
