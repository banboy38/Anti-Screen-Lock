import { useEffect } from 'react';
import './App.css'

export default function App() {
  useEffect(() => {
        
      navigator.wakeLock.request("screen")
      .then((lock)=>{
          console.log(lock);
      })      

    return () => {}
  }, [])

  return (
    <>
      Screen locked, will not go to sleep
    </>
  )
}

