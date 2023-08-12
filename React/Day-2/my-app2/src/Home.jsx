import React from 'react'

function Home() {
    let a = 10;
    let b= 20;
    let arr = ["Dinesh", "Del"];
  return (
    <div>
       
      {
          //  arr.map((x) => (
               
               // <h2>its me {x}:{a+b}: {a-b}</h2>

          //  )
           // )
           <div>
           <h2> its me {arr[0]}: {a+b}</h2>
           <h3> its me {arr[1]}: {a-b}</h3>
           </div>
        }
    </div>
  )
}

export default Home