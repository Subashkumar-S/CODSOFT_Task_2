import React from 'react'

const Button = ({ href, children }) => {
  const handleLinkClick = () => {
    window.open(href, '_blank');
  };
  return (
    <button className=' text-white font-montserrat font-semibold py-2 px-6 rounded w-[150px] hover:bg-pink hover:text-black border-2 border-solid border-pink uppercase
    duration-500' onClick={handleLinkClick}>
      {children}
    </button>
  )
}

export default Button