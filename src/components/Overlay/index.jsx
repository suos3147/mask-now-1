/** @jsx jsx */
import { jsx, css } from '@emotion/core'

const Overlay = ({ name, addr, remain_stat }) => {
  return (
    <article css={articleStyle}>
      <div css={nameStyle}>{name}</div>
      <div css={[remainStyle[remain_stat], stackStyle]}>
        {remain_stat === 'plenty'
          ? '100개 이상'
          : remain_stat === 'some'
          ? '30~100개'
          : remain_stat === 'empty'
          ? '2~30개'
          : '판매 중지'}
      </div>
      <div css={addrStyle}>
        <p>{addr}</p>
      </div>
    </article>
  )
}

const articleStyle = css`
  padding: 5px;
  background: #f1f2f6;
  box-sizing: border-box;
  width: 130px;
  border: none;
  border-radius: 5%;
  margin: 0px 0px 195px 20px;
  display: flex;
  flex-direction: column;
`

const nameStyle = css`
  padding-bottom: 2px;
  border-bottom: 1px solid #2980b9;
  color: #2980b9;
  font-size: 14px;
`

const stackStyle = css`
  margin: 3px 0;
  font-size: 16px;
`

const remainStyle = {
  plenty: css`
    color: #1abc9c;
  `,
  some: css`
    color: #9b59b6;
  `,
  empty: css`
    color: #c0392b;
  `,
  break: css`
    color: #2c3e50;
  `,
}

const addrStyle = css`
  width: 100%;
  color: #aaaaaa;
  font-size: 12px;
  & > p {
    margin: 0;
    white-space: normal;
    word-break: keep-all;
    word-wrap: normal;
  }
`

export default Overlay
