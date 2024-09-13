import React from 'react'
import {data} from "./Data"
import { useState } from 'react'
import { MdOutlineAddShoppingCart } from "react-icons/md";
import { FiMinusCircle } from "react-icons/fi";
import { FiPlusCircle } from "react-icons/fi";
import { useContext } from 'react';
import { myContext } from '../App';
// import { useContext } from 'react';

const Header = () => {

    const myCounting = useContext(myContext)


// const [cart, setCart] = useState([])

    const [Datas, setDatas] = useState(data)


    const [condition, setCondition] = useState(true)
   
    
    const changeCondition = (event) => {
        setCondition(!condition)

        myCounting.cart.push({name:event.srcElement.nextElementSibling.nextElementSibling.innerHTML,tittle:event.srcElement.nextElementSibling.nextElementSibling.nextElementSibling.innerHTML,price:event.srcElement.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.innerHTML})
        // console.log(event.srcElement.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.innerHTML)
        // console.log(myCounting.cart)
        
    }
    // console.log(condition)


    // const [count, setCount] = useState(1)

//    const myCounting = useContext(myContext)
    // console.log(myCounting)

    // const addition = () => {
    //     setCount(count + 1)
    // }
    const addition = () => {
        myCounting.setAdding(myCounting.adding + 1)
    }

    // const subtraction = () => {
    //     setCount(count - 1)
    //     if (count === 1){
    //         setCount(count)
    //         setCondition(!condition)
    //     }
    // }
    
    const subtraction = () => {
        myCounting.setAdding(myCounting.adding - 1)
        if (myCounting.adding === 1){
            myCounting.setAdding(myCounting.adding)
            setCondition(!condition)
        }
    }
    
    

   

  return (
    <div className=' '>
        <h1 className='text-4xl font-bold mb-8 ml-[10%]'>Desserts</h1>

       <div className='grid md:grid-cols-3 md:gap-4 md:px-5'>
       {Datas.map((use)=>{
            return(
                <div className='flex mb-3 pb-10 justify-center'>
                   <div className=''>
                   <img src={use.image.mobile} className='w-[320px] rounded-lg shadow-md relative top-3'/>
                      {/* {condition? <button onClick={()=>{changeCondition(event)}} className='flex rounded-3xl border-2 border-[#F0B19D] w-[150px] gap-2 h-10 pl-5 pt-1 font-light ml-[25%] md:ml-[20%] relative bg-white'> <MdOutlineAddShoppingCart className='text-[#F0B19D] mt-1' />Add to Cart</button>: 
                   <div className='flex justify-around rounded-3xl border-2 text-white bg-[#C83B0F] border-[#F0B19D] w-[170px] h-10 pt-1 font-light ml-[25%] md:ml-[20%] relative'><button onClick={()=>{subtraction()}}><FiMinusCircle /></button>{myCounting.adding}<button onClick={()=>{addition()}}><FiPlusCircle /></button></div>} */}
                   
                   <button onClick={()=>{changeCondition(event)}} className='flex rounded-3xl border-2 border-[#F0B19D] w-[150px] gap-2 h-10 pl-5 pt-1 font-light ml-[25%] md:ml-[20%] relative bg-white'> <MdOutlineAddShoppingCart className='text-[#F0B19D] mt-1' />Add to Cart</button>
                   
                   <div className={ `${condition ? "invisible":"visible"} flex  justify-around rounded-3xl border-2 text-white bg-[#C83B0F] border-[#F0B19D] w-[170px] h-10 pt-1 font-light ml-[25%] md:ml-[20%] relative`}><button onClick={()=>{subtraction()}}><FiMinusCircle /></button>{myCounting.adding}<button onClick={()=>{addition()}}><FiPlusCircle /></button></div>
    <h4 className='text-[#9D8887] font-light'>{use.category}</h4>
                    <h1 className='text-[#2B201C] font-bold'>{use.name}</h1>
                    <h1 className='text-[#F0B19D] font-bold'>${use.price}</h1>
                   </div>


                </div>
            )
        })}

       </div>


    </div>
  )
}

export default Header