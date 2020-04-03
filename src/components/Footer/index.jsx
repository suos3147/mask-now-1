/** @jsx jsx */
import { Fragment } from 'react'
import { jsx, css } from '@emotion/core'
import COLORS from '../../assets/colors'
import { useEffect, useState } from 'react'

const Footer = ({ color }) => {
  const [shadow, setShadow] = useState(false)
  const { documentElement } = document

  useEffect(() => {
    const shadowEvent = () => {
      if (
        documentElement.scrollHeight ===
        documentElement.clientHeight + documentElement.scrollTop
      ) {
        setShadow(true)
      } else {
        setShadow(false)
      }
    }
    window.addEventListener('scroll', shadowEvent)
    return () => {
      window.removeEventListener('scroll', shadowEvent)
    }
  }, [documentElement.clientHeight, documentElement.scrollHeight, documentElement.scrollTop])

  return (
    <Fragment>
      <footer css={setStyle(color)}>
        <div></div>
        <p>
          Copyright © <a href="https://github.com/suos3147">YuJin Kim</a>,{' '}
          <a href="https://github.com/pathas1126">JunHong Min</a>,{' '}
          <a href="https://github.com/joabyjoa">EunJin Kim</a> All rights reserved.
        </p>
      </footer>
      <div css={shadow && boxShadow}></div>
    </Fragment>
  )
}

const boxShadow = css`
  width: 100%;
  height: 3px;
  bottom: 51px;
  position: absolute;
  z-index: 2;
  box-shadow: 0px -2px 2px 0px rgba(0, 0, 0, 0.32), 0px -3px 4px 1px rgba(30, 144, 255, 0.45);
  transition: 0.2s ease-out;
`

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
