/** @jsx jsx */
import { jsx } from '@emotion/core'
import PropTypes from 'prop-types'

const Item = ({ data }) => {
  const { addr, name, remain_stat, stock_at } = data
  return (
    <li>
      <p>{name}</p>
      <p>{addr}</p>
      <p>입고시간: {stock_at}</p>
      {remain_stat === 'plenty' ? (
        <span> 100개 ~ </span>
      ) : remain_stat === 'some' ? (
        <span> 30개 ~ 100개</span>
      ) : remain_stat === 'few' ? (
        <span> 2개 ~ 30개</span>
      ) : remain_stat === 'empty' ? (
        <span> ~ 1개</span>
      ) : (
        <span>판매중지</span>
      )}
    </li>
  )
}

Item.propTypes = {
  data: PropTypes.object,
}

export default Item
