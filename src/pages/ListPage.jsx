import React, { useState } from 'react'
import { PageTemplate, ModalWithButton } from '../components'
import { getCookie, createCookie } from '../library'
import { ListContainer } from '../containers'

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
      {!getCookie() && modal && (
        <ModalWithButton toggleModal={toggleModal} todayClose={todayClose} />
      )}
      <ListContainer></ListContainer>
    </PageTemplate>
  )
}

export default ListPage
