/** @jsx jsx */
import { jsx, css } from '@emotion/core'
import COLORS from '../../assets/colors'

const Overlay = ({ name = '약국 이름', addr = '약국 주소', remain_stat: remainStat }) => {
  return (
    <article css={articleStyle}>
      <div css={nameStyle}>{name}</div>
      <div css={[remainStyle[remainStat], stackStyle]}>
        {remainStat === 'plenty'
          ? '100개 이상'
          : remainStat === 'some'
          ? '30~100개'
          : remainStat === 'few'
          ? '2~30개'
          : remainStat === 'empty'
          ? '1개 이하'
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
  background: #fafbfa;
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
  border-bottom: 1px solid ${COLORS['primary']};
  color: ${COLORS['primary']};
  font-size: 15px;
`

const stackStyle = css`
  margin: 3px 0;
  font-size: 17px;
`

const remainStyle = {
  plenty: css`
    color: ${COLORS['plenty']};
  `,
  some: css`
    color: ${COLORS['some']};
  `,
  few: css`
    color: ${COLORS['few']};
  `,
  empty: css`
    color: ${COLORS['empty']};
  `,
  break: css`
    color: ${COLORS['break']};
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
