import React from 'react'
import Button from './Button'

const ContactForm = () => {
  return (
    <div className=' flex flex-col  md:w-1/2 bg-black rounded-xl'>
        <form action="submit"  className='flex flex-col items-center gap-4 p-4'>
            <div className='flex flex-col  w-full '>
                <label htmlFor="name" className='text-xl font-palanquin'>Name :</label>
                <input type='text' name='name' id='name' className=' p-2 outline-none bg-primary-black text-primary-white rounded-md' required/>
            </div>
            <div className='flex flex-col w-full'>
                <label htmlFor="email" className='text-xl font-palanquin'>Email :</label>
                <input type='email' name='email' id='email' className=' p-2 outline-none bg-primary-black text-primary-white rounded-md'required/>
            </div>
            <div className='flex flex-col w-full'>
                <label htmlFor="message" className='text-xl font-palanquin'>Message :</label>
                <textarea id='message'  name='message' rows="5" cols="22" className='resize-none outline-none bg-primary-black text-primary-white rounded-md'/>
            </div>
            <Button type="submit">
                Send
            </Button>
        </form>
    </div>
  )
}

export default ContactForm