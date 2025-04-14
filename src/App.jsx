import { useState,useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { supabase } from '../supabase.js'

function App() {
  const [count, setCount] = useState(0)

  async function getTodos() {
      const {data, error}= await supabase.from('clients').select('*')
    if(data)
      console.log(data)
  }

    useEffect(()=>{
      getTodos()
    },[])


  return (
   <div>
    Hello
   </div>
  )
}

export default App
