import React from 'react'
import { fetchMask, usePromise, useCurrentLocation } from '../library'
import { List, Loader } from '../components'

const ListContainer = () => {
  let { latitude, longitude } = useCurrentLocation()

  const [loading, response, error] = usePromise(() => {
    if (latitude || longitude)
      return fetchMask({
        method: 'GET',
        url: `/storesByGeo/json?lat=${latitude}&lng=${longitude}`, // log이 아니라 lng임 오타나서 그런거
      })
  }, [latitude, longitude])

  if (loading) return <Loader></Loader>
  if (error) return <p>What happen?😧</p>
  if (!response) return null

  const { data } = response
  return <List data={data.stores}></List>
}

export default ListContainer
