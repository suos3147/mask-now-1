/** @jsx jsx */
import { jsx, css } from '@emotion/core'
import Modal from '.'
import { Button } from '../index'

const ModalWithButton = ({ toggleModal, todayClose }) => {
  return (
    <Modal>
      <div css={container}>
        <div>
          <h2>
            <span role="img" aria-label="emoji">
              👏
            </span>
            공지사항
          </h2>
          <Button variation="outline" onClick={toggleModal} color="default">
            X
          </Button>
        </div>
        <p>
          <span role="img" aria-label="emoji">
            📇
          </span>
          재고 현황은 5~10분 주기로 업데이트되며, 실제와 다를 수 있습니다.
        </p>

        <p>
          <span role="img" aria-label="emoji">
            😷
          </span>
          마스크 구매 시 신분증을 반드시 지참하셔야 합니다.
        </p>
        <p>
          <span role="img" aria-label="emoji">
            💸
          </span>
          공적 마스크는 1인당 2매까지 구매 가능하며 하나당 가격은 1,500원입니다.
        </p>
        <div css={buttonContainer}>
          <span onClick={todayClose}>오늘 그만 보기</span>
        </div>
      </div>
    </Modal>
  )
}

const container = () => css`
  margin: 0 auto;
  padding: 3px;
  width: 90%;
  height: 80%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  & > div:first-of-type {
    margin-bottom: 10px;
    padding: 0;
    width: 60%;
    display: flex;
    justify-content: space-around;
    align-items: center;
  }

  & > p {
    width: 92%;
    margin: 14px 0px;
    line-height: 25px;
    font-size: 19px;
  }
`

const buttonContainer = () => css`
  width: 100%;
  margin-top: 20px;
  text-align: center;
  & > span {
    margin: 0;
    border-bottom: 2px solid #bcbcbc;
    color: black;
    font-size: 18px;
    font-weight: bold;
    cursor: pointer;
  }
`

export default ModalWithButton
