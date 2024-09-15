import React from 'react'
import Pokemon from '../List/Pok'
import './PokList.css'

const PokList = ({list}) => {
  return (
    <ul className='ul'> {/** map pour parcourir la liste */}
      {list.map((pokemone,index)=>
        ( <li key={index}>
          {pokemone.name}
          <img src={pokemone.photo} alt="" width={'140px'}  />
          {pokemone.type}
        </li>

        ))}

    </ul>
  )
}

export default PokList