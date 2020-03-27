/** @jsx jsx */
import { jsx } from '@emotion/core'
import PropTypes from 'prop-types'

const Item = ({ data }) => {
  const { addr, name } = data
  return (
    <li>
      <p>{name}</p>
      <p>{addr}</p>
    </li>
  )
}

Item.propTypes = {
  data: PropTypes.object,
}

export default Item
