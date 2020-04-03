/** @jsx jsx */
import { jsx, css } from '@emotion/core'
import Modal from './index'
import Button from '../Button'

const ModalWithDay = ({ size, closeModal, children, days, day }) => {
  return (
    <Modal size={size}>
      <div css={dayModalStyle(day)}>
        <h2>
          구매 가능한 요일은 <span>{days[day]}</span>입니다.
        </h2>
        <Button onClick={closeModal} color="secondary">
          다른 요일도 보러 가기
        </Button>
      </div>
    </Modal>
  )
}

const dayColors = {
  1: '#95afc0',
  2: '#eb4d4b',
  3: '#22a6b3',
  4: '#6ab04c',
  5: '#f6e58d',
  6: '#95afc0',
  7: '#eb4d4b',
  8: '#22a6b3',
  9: '#6ab04c',
  0: '#f6e58d',
}

const colorStyle = day => css`
  color: ${dayColors[day]};
`

const dayModalStyle = day => css`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  height: 100%;
  & > h2 > span {
    ${colorStyle(day)};
    font-size: 28px;
    text-shadow: 1.2px 1.5px 1.2px rgba(151, 151, 151, 0.6);
  }
`

export default ModalWithDay
