/** @jsx jsx */
import { Fragment } from 'react'
import { jsx, css } from '@emotion/core'
import { Header, Footer } from '..'

const PageTemplate = ({ children }) => {
  return (
    <Fragment>
      <Header />
      <main css={mainStyle}>{children}</main>
      <Footer color="primary" />
    </Fragment>
  )
}

const mainStyle = css`
  position: relative;
  display: flex;
  flex-direction: column;
  padding: 4rem 0.5rem 0;
  height: 100vh;
  background: #fff;
  z-index: 1;
`

export default PageTemplate
