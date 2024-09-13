import React from 'react'
import Header from './COMPONENT/Header'
import Cart from './Component/Cart'
import { createContext } from 'react'
import { useState } from 'react'

export const myContext = createContext()

// const [count, setCount] = useState(1)
// const [adding, setAdding] = useState(1)



const App = () => {
  const [adding, setAdding] = useState(0)

  const [cart, setCart] = useState([])
  return (
   <myContext.Provider value={{adding, setAdding, cart, setCart}}>
     <div className='bg-[#FBF9F5] lg:flex'>
      <Header/>
      <Cart/>
    </div>
   </myContext.Provider>
  )
}

export default App