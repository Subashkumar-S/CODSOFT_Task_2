import React from 'react'
import Button from '../components/Button'
import aboutImage from "../assets/person.png"
import Skills from '../components/Skills'
import Tools from '../components/Tools'


const About = () => {
  return (
    <section id='about' className='flex flex-col w-full min-h-screen justify-center items-center gap-8 text-primary-white bg-active-black px-[10vw]'>
      <div className='flex items-center justify-center flex-col md:flex-row '>
        <img src={aboutImage} alt="person"  height={300} width={300}/>
        <div className='flex flex-col gap-4 md:w-1/2 md:ml-20 lg:md-40'>
          <h3 className='text-4xl text-pink-700'>About me,</h3>
          <p className='text-2xl'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Modi accusamus, eaque, odio illo ut amet sapiente, fuga dolores deserunt obcaecati labore sit beatae recusandae dicta facere magnam non. Adipisci, voluptates?</p>
          <Button>Resume</Button>
        </div>
        
      </div>
      <Skills />
      <Tools />

    </section>
  )
}

export default About