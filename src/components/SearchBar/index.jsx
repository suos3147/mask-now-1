/** @jsx jsx */
import { jsx, css } from '@emotion/core'
import { Input, Button, Icon } from '../index'

const SearchBar = ({ placeholder, onChange, onClick, style }) => {
  return (
    <div css={defaultStyle} style={style}>
      <Input placeholder={placeholder} onChange={onChange} />
      <Button onClick={onClick} variation="flat">
        <Icon shape="search" />
      </Button>
    </div>
  )
}

const defaultStyle = css`
  display: flex;
  align-content: center;
  padding: 0.5rem 0;
  input {
    flex: 1;
  }
`

export default SearchBar
