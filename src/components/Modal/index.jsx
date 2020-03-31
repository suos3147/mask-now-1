/** @jsx jsx */
import { jsx, css } from '@emotion/core'

const Modal = ({ children }) => {
  return (
    <div css={style}>
      <div>{children}</div>
    </div>
  )
}

const style = css`
  position: fixed;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgba(0, 0, 0, 0.5);
  z-index: 90;
  & > div {
    padding-top: 45px;
    width: 350px;
    height: 440px;
    background: white;
    border-radius: 15px;
    animation-name: popup;
    animation-duration: 0.5s;
    z-index: 100;
  }

  @keyframes popup {
    from {
      transform: scale(0.1) translateY(-500px);
    }
    to {
      transform: scale(1) translateY(0px);
    }
  }
`

export default Modal
