/** @jsx jsx */
import { jsx, css } from '@emotion/core'
import COLORS from '../../assets/colors'

const Footer = ({ color }) => {
  return (
    <footer css={setStyle(color)}>
      <p>
        Copyright © <a href="https://github.com/suos3147">YuJin Kim</a>,{' '}
        <a href="https://github.com/pathas1126">JunHong Min</a>,{' '}
        <a href="https://github.com/joabyjoa">EunJin Kim</a> All rights reserved.
      </p>
    </footer>
  )
}

const setStyle = color => {
  return css`
    position: sticky;
    bottom: 0;
    left: 0;
    width: 100%;
    background: ${COLORS[color]};
    padding: 15px;
    text-align: center;
    color: white;
    & a {
      text-decoration: none;
      &:hover {
        color: rgba(255, 255, 255, 0.7);
      }
      &:active {
        color: rgba(255, 235, 59, 1);
      }
    }
  `
}

export default Footer
