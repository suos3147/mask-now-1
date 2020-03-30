/** @jsx jsx */
import { jsx, css } from '@emotion/core'

const Input = ({ onChange, placeholder }) => {
  return <input css={style} type="text" onChange={onChange} placeholder={placeholder} />
}

const style = css`
  width: 30%;
  margin-right: 6px;
  font-size: 14px;
  border-style: none;
  outline: none;
  border-bottom: 2px solid #ababab30;
  transition: ease 0.3s;
  &:focus {
    transform: scale(1.006);
    font-size: 17px;
    border-bottom: 2px solid #ababab;
  }
`

export default Input
