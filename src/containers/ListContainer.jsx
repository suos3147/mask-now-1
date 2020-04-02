import React, { useState, useEffect } from 'react'
import { fetchMask, usePromise, useCurrentLocation } from '../library'
import { List, Loader } from '../components'
import LocationContext from '../store/LocationContext'

const ListContainer = () => {
  let { latitude, longitude } = useCurrentLocation()
  const [loading, response, error] = usePromise(() => {
    if (latitude || longitude)
      return fetchMask({
        method: 'GET',
        url: `/storesByGeo/json?lat=${latitude}&lon=${longitude}`,
      })
  }, [latitude, longitude])

  if (loading) return <Loader></Loader>
  if (error) return <p>What happen?😧</p>
  if (!response) return null

  const { data } = response
  return <List data={data.stores}></List>
}

export default ListContainer
