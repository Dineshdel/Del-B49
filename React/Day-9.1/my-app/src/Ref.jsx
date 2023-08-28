import React, { useRef, useState }from 'react' 

function Ref() {

    const [count, setCount] = useState(0);
    const countRef = useRef(0);
    const textRef = useRef(null);
    console.log("countRef:", countRef);

    function handleClick () {

        countRef.current+1;
        console.log("Text REF", textRef.current);

        textRef.current.focus();
        // textRef.current.value = "Del";

        console.log("State Value: ", count);
        console.log("Ref Value: ", countRef.current);
    }
  return (
    <div>
        <h2>UseRef:</h2>
        <p>State Value: {count}</p>
        <p>Ref Value: {countRef.current}</p>
        <button onClick={handleClick}>Increase</button>

        <input type="text" ref={textRef}></input>
    </div>
  )
}

export default Ref