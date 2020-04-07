/** @jsx jsx */
import { jsx, css } from '@emotion/core'
import { Input, Button, Icon } from '../index'

const SearchBar = ({ placeholder, onChange, onClick, onEnter, style }) => {
  return (
    <div css={defaultStyle} style={style}>
      <Input placeholder={placeholder} onChange={onChange} onEnter={onEnter} />
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
  height: 45px;
  margin-bottom: 15px;
  padding: 0 10px;
  input {
    flex: 1;
  }
`

export default SearchBar
