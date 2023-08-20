import React from 'react'
import Button from './Button'

const ContactForm = () => {
  return (
    <div className=' flex flex-col flex-grow'>
        <form action="submit"  className='flex flex-col items-center gap-4 '>
            <div className='flex flex-col '>
                <label htmlFor="name">Enter name :</label>
                <input type='text' name='name' id='name' className='w-full px-2 outline-none text-active-black rounded-md' required/>
            </div>
            <div className='flex flex-col'>
                <label htmlFor="email">Enter email :</label>
                <input type='email' name='email' id='email' className=' px-2 outline-none text-active-black rounded-md'required/>
            </div>
            <div className='flex flex-col'>
                <label htmlFor="message">Enter message :</label>
                <textarea id='message'  name='message' rows="5" cols="22" className=' outline-none text-active-black rounded-md'/>
            </div>
            <Button type="submit">
                Send
            </Button>
        </form>
    </div>
  )
}

export default ContactForm