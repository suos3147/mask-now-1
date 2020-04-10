import React, { useState } from 'react'
import { PageTemplate } from '../components'
import { getCookie, createCookie } from '../library'
import { ListContainer, SearchContainer, ModalWithButton } from '../containers'

const ListPage = () => {
  const [modal, setModal] = useState(true)
  const [coords, setCoords] = useState(null)
  const toggleModal = () => {
    setModal(modal => !modal)
  }
  const todayClose = () => {
    setModal(modal => !modal)
    createCookie()
  }
  return (
    <PageTemplate>
      {!getCookie() && modal && <ModalWithButton onClick={toggleModal} />}
      <SearchContainer getCoords={setCoords} />
      <ListContainer coords={coords} />
    </PageTemplate>
  )
}

export default ListPage
