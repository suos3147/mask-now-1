/** @jsx jsx */
import { jsx, css } from '@emotion/core'
import Colors from '.'

export default {
  component: Colors,
  title: 'Assets|Color Palette',
}

export const Default = () => (
  <section css={palette}>
    <div className="primary">primary</div>
    <div className="default">default</div>
  </section>
)

const palette = css`
  display: flex;
  div {
    width: 5rem;
    height: 5rem;
    line-height: 5rem;
    text-align: center;
    border-radius: 50%;
    font-size: 0.8rem;
    font-weight: bold;
    color: #fff;
    text-transform: capitalize;
    & ~ div {
      margin-left: 1rem;
    }
  }
  .primary {
    background: ${Colors.primary};
  }
  .default {
    background: ${Colors.default};
  }
`
