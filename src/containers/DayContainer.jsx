import React, { useState } from 'react'
import { NumberPad, ModalWithDay } from '../components'

const DayContainer = () => {
  const [modal, setModal] = useState(false)
  const [day, setDay] = useState(0)
  const days = {
    1: '월요일',
    2: '화요일',
    3: '수요일',
    4: '목요일',
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
      <ModalWithDay closeModal={closeModal} size="wide" day={day} days={days} visible={modal} />
    </div>
  )
}

export default DayContainer
