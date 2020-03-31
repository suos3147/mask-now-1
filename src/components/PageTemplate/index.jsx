/** @jsx jsx */
import React from 'react'
import { jsx, css } from '@emotion/core'
import { useLocation } from 'react-router-dom'
import { Header, Footer, Typography } from '..'
import { ROUTES } from '../../constants'

const PageTemplate = ({ children }) => {
  const { pathname } = useLocation()
  const [{ name }] = ROUTES.filter(({ path }) => path === pathname)
  return (
    <>
      <Header />
      <main css={mainStyle}>
        {/* <Typography variation="title">{name}</Typography> */}
        {children}
      </main>
      <Footer color="primary" />
    </>
  )
}

const mainStyle = css`
  position: relative;
  display: flex;
  justify-content: center;
  flex-direction: column;
  padding: 3rem 0.5rem 0;
  height: 100vh;
  background: #fff;
  z-index: 1;
`

export default PageTemplate
