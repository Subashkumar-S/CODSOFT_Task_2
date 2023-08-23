import React from 'react'

const Button = (props) => {
  return (
    <button className=' text-white font-montserrat font-semibold py-2 px-6 rounded w-[150px] hover:bg-pink hover:text-black border-2 border-solid border-pink uppercase
    duration-500'>
      {props.children}
    </button>
  )
}

export default Button