/** @jsx jsx */
import { jsx } from '@emotion/core'
import { Item } from '..'

const List = ({ data }) => {
  return (
    <ul>
      {data.map(({ code, addr, name, remain_stat, stock_at }) => (
        <Item key={code} data={{ addr, name, remain_stat, stock_at }} />
      ))}
    </ul>
  )
}

export default List
