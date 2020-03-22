/** @jsx jsx */
import { jsx, css } from '@emotion/core'
import COLORS from '../../assets/colors'

const Footer = ({ color }) => {
  return (
    <footer css={setStyle(color)}>
      <p>Copyright © YuJin Kim, JunHong Min, EunJin Kim All rights reserved. </p>
    </footer>
  )
}

const setStyle = color => {
  return css`
    text-align: center;
    color: ${COLORS[color]};
  `
}

export default Footer
