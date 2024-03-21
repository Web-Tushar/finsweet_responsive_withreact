import React, { Children } from 'react'

const Button = ( {title,btn}) => {
   // const {Children} = props
  return (
    <div>
               <button  className=" btn px-[45px] py-[20px] font-bold  text-[#1C1D28] bg-[#FFD2A4] rounded-xl ">{title}</button>

    </div>
  )
}

export default Button