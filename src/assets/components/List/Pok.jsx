import React from 'react'
import './Pok.css'

const Pokemon = ({name,photo,type}) => {

  return (
    <li>
      <div>{name}</div>  
      <div>({type.join(',')})</div>
      <div><img src="{photo}" alt="" /></div>
    </li>
  )
}

export default  Pokemon