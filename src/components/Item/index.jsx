/** @jsx jsx */
import { jsx, css } from '@emotion/core'
import PropTypes from 'prop-types'

const Item = ({ data }) => {
  const { addr, name, remain_stat, stock_at } = data
  let remain = ''
  switch (remain_stat) {
    case 'break':
      remain = '판매중지'
      break
    case 'plenty':
      remain = '100개 ~'
      break
    case 'some':
      remain = '30개 ~ 99개'
      break
    case 'few':
      remain = '2개 ~ 29개'
      break
    case 'empty':
      remain = '~ 1개'
      break
    default:
      remain = ''
  }
  return (
    <li css={setStyle(remain_stat)}>
      <p>
        <span>[{remain}]</span> 입고시간: {stock_at}
      </p>
      <p>{name}</p>
      <p>{addr}</p>
    </li>
  )
}

Item.propTypes = {
  data: PropTypes.object,
}

const setStyle = status => {
  const backgroundColors = {
    plenty: 'green',
    some: 'yellow',
    few: 'red',
    empty: 'gray',
    break: 'lightgray',
  }
  const style = css`
    background: ${backgroundColors[status]};
    list-style: none;
    p {
      span:nth-of-type(1) {
        font-weight: bold;
      }
    }
  `
  return style
}

export default Item
