import React from 'react'
import { Header, Footer, Typography } from '..'

const AboutPage = ({ title, children }) => {
  return (
    <>
      <Header />
      <Typography variation="title">{title}</Typography>
      {children}
      <Footer />
    </>
  )
}

export default AboutPage
