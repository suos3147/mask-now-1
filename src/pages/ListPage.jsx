import React, { useState } from 'react'
import { PageTemplate, ModalWithButton } from '../components'
import { getCookie, createCookie } from '../library'

const ListPage = () => {
  const [modal, setModal] = useState(true)

  const toggleModal = () => {
    setModal(modal => !modal)
    createCookie()
  }
  return (
    <PageTemplate>
      {!getCookie() && modal && <ModalWithButton onClick={toggleModal} />}
      <p>List</p>
    </PageTemplate>
  )
}

export default ListPage
