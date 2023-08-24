import React, {useContext} from 'react'
import { ForestContext } from './ForestContext'

function AnimalSound() {
    const {animalSound} = useContext(ForestContext);

  return (
    <div>
    <div>Animals Sounds is : {animalSound} </div>
    </div>
  )
}

export default AnimalSound