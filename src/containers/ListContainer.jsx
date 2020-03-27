import React from 'react'
import { fetchMask, usePromise } from '../library'
import { List } from '../components'

const ListContainer = () => {
  const [loading, response, error] = usePromise(() => {
    return fetchMask({ method: 'GET', url: '/stores/json?page=1&perPage=500' })
  }, [])

  if (loading) return <p>Loading...</p>
  if (error) return <p>What happen?😧</p>
  if (!response) return null

  const { data } = response
  return <List data={data.storeInfos}></List>
}

export default ListContainer
