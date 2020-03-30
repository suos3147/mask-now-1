/** @jsx jsx */
import { jsx, css } from '@emotion/core'
import PropTypes from 'prop-types'
import COLORS from '../../assets/colors'

const Item = ({ data }) => {
  const { addr, name, remain_stat, stock_at } = data
  let remain = ''
  switch (remain_stat) {
    case 'break':
      remain = '판매중지'
      break
    case 'plenty':
      remain = '100개 이상'
      break
    case 'some':
      remain = '30개 ~ 99개'
      break
    case 'few':
      remain = '2개 ~ 29개'
      break
    case 'empty':
      remain = '1개 이하'
      break
    default:
      remain = '😔데이터 없음'
  }
  return (
    <li css={setStyle(remain_stat)}>
      <p>
        <span>{name}</span>
        <span>{remain}</span>
      </p>
      <p>입고시간: {stock_at}</p>

      <p>{addr}</p>
    </li>
  )
}

Item.propTypes = {
  data: PropTypes.object,
}

const setStyle = status => {
  const tag = {
    plenty: '#133926',
    some: '#e6b800',
    few: '#990000',
    empty: '#4d4d4d',
    break: '#000000',
  }
  const style = css`
    background: ${COLORS[status]};
    height: 20rem;
    padding: 1rem;
    box-shadow: 0.1rem 0.1rem 0.1rem 0.1rem #d9d9d9;
    opacity: ${status === 'break' ? 0.3 : 1};
    p {
      display: flex;
      flex-direction: column;
      padding: 0.5rem;
      word-break: keep-all;
      color: ${['plenty', 'few'].includes(status) ? '#fff' : 'inherit'};
      font-size: 1.1rem;
      &:nth-of-type(1) {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
        margin-bottom: 1.5rem;
        font-weight: bold;
        font-size: 1.7rem;
      }
      span:nth-of-type(2) {
        width: fit-content;
        height: fit-content;
        padding: 0 0.7rem;
        text-align: right;
        font-size: 1.2rem;
        border-radius: 25px;
        background-color: white;
        color: ${tag[status]};
      }
    }
  `
  return style
}

export default Item
