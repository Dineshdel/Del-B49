import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css' 
import LifeCycle from './LifeCycle'

function App() {
  
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

   useEffect(() => {
    async function fetchData() {
      const apiUrl ="https://restcountries.com/v3.1/all";
      try {
        const response = await fetch(apiUrl);
        const data = await response.json();
        for (var i = 0; i< data.length; i++) 
        {
          if (data[i].name.common == "peru")
          {
            setData(data[i].flag);
          }
        }

      }
      catch (err) {
        setError(err);
      }
      finally {
        setLoading(false);
      }
    }
    setTimeout(() => {
      fetchData();
    }, 3000);
   }, []);

   if(loading) {
    return <div><h2>Loading...</h2></div>
   }

   if(error) {
    return <div>Error: {error}.message</div>
   }

   return (
    <>
    <LifeCycle />
     
    </>
  )
}
export default App