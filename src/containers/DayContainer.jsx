import React, { useState } from 'react'
import { NumberPad, Modal, ModalWithDay } from '../components'

const DayContainer = () => {
  const [modal, setModal] = useState(false)
  const [day, setDay] = useState(0)
  const days = {
    1: '월요일',
    2: '화요일',
    3: '수요일',
    4: '목요일',
    5: '금요일',
    6: '월요일',
    7: '화요일',
    8: '수요일',
    9: '목요일',
    0: '금요일',
  }
  const popupModal = number => {
    setDay(number)
    setModal(true)
  }
  const closeModal = () => {
    setModal(false)
  }
  return (
    <div>
      <NumberPad popupModal={popupModal} />
      {modal && (
        <ModalWithDay closeModal={closeModal} size="wide" day={day} days={days}></ModalWithDay>
      )}
    </div>
  )
}

export default DayContainer
