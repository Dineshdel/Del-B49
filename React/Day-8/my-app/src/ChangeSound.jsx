import React, {useContext} from 'react'
import { ForestContext } from './ForestContext'

function ChangeSound() {

    const { setAnimalSound } = useContext(ForestContext);

    const changeSound = (newSound) => {
        setAnimalSound(newSound);
    }
  return (
    <button onClick ={() => changeSound('Lion Sound')}> Change Sound... </button>
  )
}

export default ChangeSound