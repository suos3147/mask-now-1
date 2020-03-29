/** @jsx jsx */
import { useState } from 'react'
import { css, jsx } from '@emotion/core'
import { NavLink } from 'react-router-dom'
import { ROUTES } from '../../constants'
import { Button, Icon } from '..'
import COLORS from '../../assets/colors'

const Navigation = () => {
  const [visible, setVisible] = useState(false)
  return (
    <nav css={style}>
      <Button onClick={() => setVisible(!visible)} variation="flat" size="medium">
        <Icon shape="more" size="medium" />
      </Button>
      <ul className={visible && 'visible'}>
        {ROUTES.map(
          ({ path, name, navigation }) =>
            navigation && (
              <li>
                <NavLink
                  key={path}
                  activeClassName="active"
                  exact={path === '/'}
                  to={path}
                  css={style}
                >
                  {name}
                </NavLink>
              </li>
            ),
        )}
      </ul>
    </nav>
  )
}

const style = css`
  text-transform: uppercase;
  & ~ * {
    margin-left: 1rem;
  }
  a {
    color: ${COLORS.default};
    &.active {
      color: ${COLORS.primary};
      font-weight: bold;
    }
  }
  button {
    display: none;
  }
  ul {
    display: flex;
    justify-content: space-between;
    list-style: none;
    li ~ li {
      margin-left: 2rem;
    }
  }
  @media screen and (max-width: 750px) {
    button {
      display: block;
    }
    ul {
      display: none;
      position: absolute;
      left: 0;
      flex-direction: column;
      padding-bottom: 1rem;
      width: 100%;
      background: #fff;
      box-shadow: 0 1rem 1rem rgba(0, 0, 0, 0.1);
      li {
        margin: 0 1rem;
        padding: 0.5rem;
        text-align: right;
      }
      &.visible {
        display: flex;
      }
    }
  }
`

export default Navigation
