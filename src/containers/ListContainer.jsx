import React from 'react'
import { fetchMask, usePromise } from '../library'
import { List } from '../components'

const ListContainer = () => {
  const [loading, response, error] = usePromise(() => {
    return fetchMask({ method: 'GET', url: '/storesByGeo/json' })
  }, [])

  if (loading) return <p>Loading...</p>
  if (error) return <p>What happen?😧</p>
  if (!response) return null

  const { data } = response
  return <List data={data.stores}></List>
}

export default ListContainer
