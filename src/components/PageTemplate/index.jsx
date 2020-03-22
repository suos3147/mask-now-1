import React from 'react'
import { useLocation } from 'react-router-dom'
import { Header, Footer, Typography } from '..'
import { ROUTES } from '../../constants'

const PageTemplate = ({ children }) => {
  const { pathname } = useLocation()
  const [{ name }] = ROUTES.filter(({ path }) => path === pathname)
  return (
    <>
      <Header />
      <Typography variation="title">{name}</Typography>
      {children}
      <Footer />
    </>
  )
}

export default PageTemplate
