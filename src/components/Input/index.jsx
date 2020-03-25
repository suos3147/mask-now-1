/** @jsx jsx */
import { jsx, css } from '@emotion/core'

const Input = ({ onChange, placeholder }) => {
  return <input css={style} type="text" onChange={onChange} placeholder={placeholder} />
}

const style = css`
  width: 30%;
  margin-right: 6px;
  padding: 8px 0 3px 0;
  font-size: 14px;
  transition: ease 0.3s;
  &:focus {
    transform: scale(1.02);
    border-style: none;
    border-bottom: 2px solid #ababab;
  }
`

export default Input
