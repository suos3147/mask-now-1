import React, { useState } from 'react'
import { PageTemplate } from '../components'
import { getCookie, createCookie } from '../library'
import { ListContainer, ModalWithButton } from '../containers'

const ListPage = () => {
  const [modal, setModal] = useState(true)

  const toggleModal = () => {
    setModal(modal => !modal)
  }
  const todayClose = () => {
    setModal(modal => !modal)
    createCookie()
  }
  return (
    <PageTemplate>
      {!getCookie() && (
        <ModalWithButton toggleModal={toggleModal} todayClose={todayClose} visible={modal} />
      )}
      <ListContainer></ListContainer>
    </PageTemplate>
  )
}

export default ListPage
