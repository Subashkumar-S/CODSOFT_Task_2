import React from 'react'
import { FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa';
import { SiGmail } from "react-icons/si";
import { SlPhone } from "react-icons/sl";
import Socials from './Socials';

const ContactDetails = () => {

    const socialMedia = [
        {icon: FaFacebook, link: "https://www.linkedin.com/in/subashkumar-s/"},
        {icon: FaInstagram, link: "https://www.linkedin.com/in/subashkumar-s/"},
        {icon: FaLinkedin, link: "https://www.linkedin.com/in/subashkumar-s/"},
    ]
  return (
    <div className='flex flex-col gap-4'>
        <div>
            <h4 className='text-3xl  font-bold my-6'>Contact me</h4>
            <div className='flex gap-4 items-center  my-4'>
                <SiGmail />
                <p>subashs2232@gmail.com</p>
            </div>
            <div className='flex gap-4 items-center  my-4'>
                <SlPhone />
                <p>+91 9876543210</p>
            </div>
            
        </div>
        <div className='mb-4' >
            <h4 className='text-xl font-semibold mb-4'>Find me on</h4>
            <div className='flex gap-4 '>
                {
                    socialMedia.map((item, index) => (
                        <a href={item.link}>
                            <Socials key={index}>
                            <item.icon className='text-xl' />
                            </Socials>
                        </a>
                    ))
                }
           </div>
        </div>
    </div>
  )
}

export default ContactDetails