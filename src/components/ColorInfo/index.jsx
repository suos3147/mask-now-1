/** @jsx jsx */
import { jsx, css } from '@emotion/core'
import COLORS from '../../assets/colors'

const ColorInfo = () => {
  return (
    <div css={container}>
      <h5>색상별 마스크 재고 개수</h5>
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
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  top: 129px;
  left: 4px;
  width: 20%;
  height: 34%;
  min-width: 140px;
  min-height: 230px;
  max-width: 250px;
  background: #fdfdfd;
  border-radius: 10px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  z-index: 1000;
  animation-name: fromLeft;
  animation-duration: 1.5s;
  & > h5 {
    padding: 0px 2px;
    text-align: center;
    color: #655656;
    font-size: 19px;
    word-break: keep-all;
    word-wrap: break-word;
  }
  & > div {
    margin-top: 3%;
    display: flex;
    width: 92%;
    height: 14%;
    padding: 4px 0px 4px 4px;
    justify-content: flex-start;
    align-items: center;
    background: #fff;
    border-radius: 4px;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  }

  & > div > span {
    font-size: 16px;
  }

  & > div > div {
    width: 18px;
    height: 18px;
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
  @media screen and (max-width: 1000px) {
    min-width: 155px;
    h5 {
      font-size: 15px;
    }
  }
  @media screen and (max-width: 500px) {
    min-width: 133px;
    min-height: 150px;
    height: 150px;
    h5 {
      font-size: 12px;
    }
    div {
      width: 90%;
      height: 14%;
      margin: 0 0 3px 5px;
      box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
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
