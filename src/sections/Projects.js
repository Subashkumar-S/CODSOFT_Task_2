import React from 'react'
import projects from "../components/data.json"
import Button from '../components/Button';


const Projects = () => {
    return (
      <section id='projects' className='w-full lg:px-[10vw] bg-primary-black text-primary-white'>
        <h3 className='text-center text-3xl font-semi-bold'>Projects</h3>
        {projects.map((project, index) => (
          <div key={index} className='flex flex-col md:flex-row items-center justify-center p-10 text-active-black'>
            <img src={project.image} alt={project.title}  className=' h-[240px]  md:w-[500px] md:h-[400px]'/>
            <div className='flex flex-col gap-4 bg-primary-white -my-2 mx-2 md:-ml-10 px-8 py-4'>
                <h2>{project.title}</h2>
                <p>{project.description}</p>
                <h4>Tech stack :</h4>
                <ul className='flex gap-4'>
                {project.techstack.map((tech, techIndex) => (
                    <li key={techIndex}>{tech}</li>
                ))}
                </ul>
                <div className='flex flex-wrap gap-4'>
                <Button href={project.github} target="_blank" rel="noopener noreferrer">GitHub</Button>
                {
                    project.demo &&
                    <Button href={project.demo} target="_blank" rel="noopener noreferrer">Demo</Button>
                }
                </div>
            </div>
          </div>
        ))}
      </section>
    );
  };
  
  export default Projects;