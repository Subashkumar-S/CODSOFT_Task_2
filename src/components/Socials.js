import React from 'react'


const Socials = (props) => {
  return (
    <div className='w-8 h-8 flex items-center justify-center text-active-black bg-primary-white rounded-full shadow-md hover:scale-125  hover:shadow-active-white'>
        {props.children}
    </div>
  )
}

export default Socials