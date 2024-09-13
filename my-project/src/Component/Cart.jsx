import React from 'react'
import { TbBrandCakephp } from "react-icons/tb";
import { useContext } from 'react';
import { myContext } from '../App';
import { useState } from 'react';
import { TiDeleteOutline } from "react-icons/ti";

const Cart = () => {

    const count = useContext(myContext)
  
    const myCarting = useContext(myContext)
    // console.log(myCarting.cart)
    
    const [cover, setCover] = useState(true)
    // if (myCarting.cart === 1){
    //     setCover(! cover)
    // }
  return (
    <div className='bg-white m-5 lg:w-[30%] shadow-lg rounded-md pb-60 pt-5'>
        <span className='text-red-600 font-extrabold text-3xl ml-[10%]'>Your Cart({count.adding})</span>



        <div className='pt-10'>
         {myCarting.cart.map((use)=>{
           return(
            <div className='mx-[10%] mb-6 border-b '>

               <div className='flex justify-between'>
              <div>
              <h1 className='text-lg md:text-2xl font-bold text-[#413938]'>{use.name}</h1>
                <div className='flex gap-5'>
                    <span className='text-red-700 font-bold'>{count.adding}X</span>
                    <h1 className='text-[#AFA3A5]'>@ {use.price}</h1>
                    <h2 className='text-[#AFA3A5]'>$ {count.adding}{use.price}</h2>
                   
                </div>
              </div>
                <button className=' w-2 self-end'> <TiDeleteOutline  className='self-end text-[#AFA3A5] md:text-lg'/></button>


               </div>
            </div>
           )


         })}
       </div>
       



        {cover?  <div className='grid justify-center gap-3'>

    <TbBrandCakephp className='text-[#9C8F8E] text-9xl rounded-lg mt-16 m-auto'/>

       <h6 className='m-auto text-[#9C8F8E] text-sm font-light'>Your added items will appear here</h6>
       </div>:<div></div>}


      
    </div>
  )
}

export default Cart