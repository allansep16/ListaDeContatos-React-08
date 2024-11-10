import { useState } from 'react'
import './App.css'
import ListaDeContatos from './Components/ListadeContato'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <ListaDeContatos/>
    </>
  )
}

export default App
