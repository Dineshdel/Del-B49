import React from 'react'
import {useParams} from 'react-router-dom'

function Fruits() {
    const {fruitsName} = useParams();

    const fruitInfo = {
        apple : "Your lung strength Your heart With asthma. Bone health. Weight loss.",
        mango : "acked with nutrients. ...Low in calories. ...May help prevent diabetes. ... ",
        banana : "May improve digestion: Banana is rich in soluble and insoluble essential role in digestive health. ..."
    };

    const info =fruitInfo[fruitsName]
  return (
    <div>
        <h2>{fruitsName}</h2>
        <p>{info}</p>
    </div>
  )
}

export default Fruits