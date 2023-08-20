import React from 'react'
import ContactForm from '../components/ContactForm'
import ContactDetails from '../components/ContactDetails';

const Contact = () => {
    
    return (
    <section id='contact' className='w-screen px-[10vw] bg-primary-black text-primary-white flex flex-col items-center justify-center md:flex-row'>
        <ContactDetails />
        <ContactForm  />
        
    </section>
  )
}

export default Contact