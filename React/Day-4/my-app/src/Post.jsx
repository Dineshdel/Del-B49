import React from 'react'
import Like from './Like'
import Comment from './Comment'

function Post(props) {
    const a = ["Dinesh", "Del"]
    //let flag  = props.flag
    const [flag, setFlag] = useState(true)
    const handleClickAdd = () => {
        setFlag(false);
    }
    const handleClickRemove = () => {
        setFlag(true);
    }
  return (
    <>
        <h2>{props.name}</h2>
       
        <ol>
            {
            a.map((arr) => (
               <li key={arr}>{arr}</li>
            ) )
            }
        </ol>

        {flag ? <button onClick={handleClickAdd}>Add</button> : <button onClick={handleClickRemove}>Remove</button>}
        <Like />
        <Comment />
        
    </>
  )
}

export default Post