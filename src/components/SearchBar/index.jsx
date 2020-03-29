import React from 'react'
import { Input, Button } from '../index'

const SearchBar = ({ placeholder, onChange, onClick }) => {
  return (
    <div>
      <Input placeholder={placeholder} onChange={onChange} />
      <Button onClick={onClick}>검색</Button>
    </div>
  )
}

export default SearchBar
