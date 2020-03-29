/** @jsx jsx */
import { jsx, css } from '@emotion/core'
import Icon from '.'

export default {
  component: Icon,
  title: 'Assets|Icon',
}

export const Default = () => <Icon shape="like" />

export const shapes = () => (
  <section css={shapeContainer}>
    <article>
      <h4>back</h4>
      <Icon shape="back" />
    </article>
    <article>
      <h4>more</h4>
      <Icon shape="more" />
    </article>
    <article>
      <h4>like</h4>
      <Icon shape="like" />
    </article>
    <article>
      <h4>liked</h4>
      <Icon shape="liked" />
    </article>
    <article>
      <h4>comment</h4>
      <Icon shape="comment" />
    </article>
    <article>
      <h4>share</h4>
      <Icon shape="share" />
    </article>
    <article>
      <h4>bookmark</h4>
      <Icon shape="bookmark" />
    </article>
    <article>
      <h4>bookmarked</h4>
      <Icon shape="bookmarked" />
    </article>
  </section>
)

export const sizes = () => (
  <section css={container}>
    <Icon shape="liked" />
    <Icon shape="liked" size="2rem" />
    <Icon shape="liked" size="3rem" />
  </section>
)

export const colors = () => (
  <section css={container}>
    <Icon shape="liked" color="orange" />
    <Icon shape="liked" color="orangered" />
    <Icon shape="liked" color="hotpink" />
    <Icon shape="liked" color="dodgerblue" />
    <Icon shape="liked" color="seagreen" />
  </section>
)

const shapeContainer = css`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  article {
    display: flex;
    align-items: center;
    & ~ article {
      margin-top: 0.5rem;
    }
  }
  h4 {
    margin-right: 1rem;
    text-transform: capitalize;
  }
  svg {
    fill: dodgerblue;
  }
`

const container = css`
  & > * ~ * {
    margin-left: 1rem;
  }
`
