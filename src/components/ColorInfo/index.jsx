/** @jsx jsx */
import { jsx, css } from '@emotion/core'
import COLORS from '../../assets/colors'

const ColorInfo = () => {
  return (
    <div css={container}>
      <h3>색상별 마스크 재고 개수</h3>
      <div>
        <div></div>
        <span>&nbsp; 100개 이상</span>
      </div>
      <div>
        <div></div>
        <span>&nbsp; 30~100개</span>
      </div>
      <div>
        <div></div>
        <span>&nbsp; 2~30개</span>
      </div>
      <div>
        <div></div>
        <span>&nbsp; 1개 이하</span>
      </div>
      <div>
        <div></div>
        <span>&nbsp; 판매 중지</span>
      </div>
    </div>
  )
}

const container = css`
  position: fixed;
  top: 110px;
  left: 3px;
  width: 220px;
  height: 300px;
  background: #fdfdfd;
  border-radius: 10px;
  box-shadow: 1px 1px 2px 1px #ababab;
  z-index: 1000;
  animation-name: fromLeft;
  animation-duration: 1.5s;
  & > h3 {
    margin-top: 8px;
    text-align: center;
    color: #655656;
  }
  & > div {
    margin-top: 15px;
    margin-left: 10px;
    display: flex;
    width: 90%;
    padding: 4px 0px 4px 4px;
    justify-content: flex-start;
    align-items: center;
    background: #fff;
    border-radius: 4px;
    box-shadow: 1px 1px 1px 1px #ababab;
  }

  & > div > span {
    font-size: 18px;
  }

  & > div > div {
    width: 20px;
    height: 20px;
    border-radius: 100%;
  }

  & > div:nth-of-type(1) > div {
    background: ${COLORS['plenty']};
    & + span {
      color: ${COLORS['plenty']};
    }
  }
  & > div:nth-of-type(2) > div {
    background: ${COLORS['some']};
    & + span {
      color: ${COLORS['some']};
    }
  }
  & > div:nth-of-type(3) > div {
    background: ${COLORS['few']};
    & + span {
      color: ${COLORS['few']};
    }
  }
  & > div:nth-of-type(4) > div {
    background: ${COLORS['empty']};
    & + span {
      color: ${COLORS['empty']};
    }
  }
  & > div:nth-of-type(5) > div {
    background: black;
    & + span {
      color: black;
    }

    @keyframes fromLeft {
      from {
        margin-left: -300px;
      }
      to {
        margin-left: 0;
      }
    }
  }
  @media screen and (max-width: 760px) {
    width: 133px;
    height: 150px;
    & > h3 {
      font-size: 12px;
    }
    & > div {
      width: 90%;
      height: 14%;
      margin: 0 0 3px 5px;
      box-shadow: 0.5px 0.5px 0.5px 0.5px #ababab;
      div {
        width: 12px;
        height: 12px;
      }
      span {
        font-size: 11px;
      }
    }
  }
`

export default ColorInfo
