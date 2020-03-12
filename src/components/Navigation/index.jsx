/** @jsx jsx */
import { css, jsx } from '@emotion/core'
import { NavLink } from 'react-router-dom'
import { ROUTES } from '../../constants'

const Navigation = () => {
  return (
    <nav className="nav">
      <span>Navigation: </span>
      {ROUTES.map(
        ({ path, name, navigation }) =>
          navigation && (
            <NavLink key={path} activeClassName="active" exact={path === '/'} to={path} css={style}>
              {name}
            </NavLink>
          ),
      )}
    </nav>
  )
}

const style = css`
  text-transform: uppercase;
  & ~ * {
    margin-left: 1rem;
  }
  .active {
    font-weight: bold;
  }
`

export default Navigation
