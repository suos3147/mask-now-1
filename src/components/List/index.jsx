/** @jsx jsx */
import { jsx } from '@emotion/core'
import { Item } from '..'

const List = ({ data }) => {
  return (
    <ul>
      {data.map(({ addr, name, code }) => (
        <Item key={code} data={{ addr, name }} />
      ))}
    </ul>
  )
}

export default List
