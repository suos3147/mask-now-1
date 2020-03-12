import React from 'react'
import { Route } from 'react-router-dom'
import { ROUTES } from './constants'

function App() {
  return (
    <>
      {ROUTES.map(({ path, component, exact }) => (
        <Route key={path} path={path} exact={exact} component={component} />
      ))}
    </>
  )
}

export default App
