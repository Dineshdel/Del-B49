import React, { useState, useRef}from 'react'
import {useEffect} from 'react';

function ClickGame() {

    const [clickCount, setClickCount] = useState(0);

    const timeRef = useRef(null);
    const clickCountRef = useRef(clickCount);

    clickCountRef.current = clickCount;
    console.log("Click Count"+clickCountRef.current)

    const startGame = () => {
        setClickCount(0);

        if(timeRef.current) {
            clearTimeout(timeRef.current);
        }

        timeRef.current = setTimeout(() => {
            alert(`Game over. You Clicked ${clickCountRef.current} times.`);
        }, 5000);
    };

    const handleClick = () => {
        setClickCount(clickCount + 1);
    }
  return (
    <div>
        <div>
            <h2>Click the Game</h2>
            <p>Click Count: {clickCount}</p>
            <button onClick={handleClick}> Click me.</button>
            <button onClick={startGame}> Start the Game</button>
        </div>
    </div>
  )
}

export default ClickGame