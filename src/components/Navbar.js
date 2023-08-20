import React, { useState } from 'react';
import locofy from "../assets/person.png"
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function App() {
 const [isOpen, setIsOpen] = useState(false);
 let Links = [
    { name: "HOME", link: "#home" },
    { name: "ABOUT", link: "#about" },
    { name: "PROJECTS", link: "#projects" },
    { name: "CONTACT", link: "#contact" },
  ];

 return (
   <nav className="sticky top-0 flex items-center justify-between flex-wrap px-6 py-4 bg-primary-white">
     <div className="flex items-center flex-shrink-0 text-white mr-6 md:mr-72">
       <img src={locofy} className="w-100 h-10 mr-2" alt="Logo" />
     </div>
     <div className="block md:hidden">
       <button
         onClick={() => setIsOpen(!isOpen)}
         className="flex items-center px-3 py-2 rounded text-black-500 hover:text-black-400"
       >
         {isOpen ? (
            <FontAwesomeIcon icon={faTimes} />
          ) : (
            <FontAwesomeIcon icon={faBars} />
          )}
       </button>
     </div>
     <div
       className={`w-full block md:flex md:items-center md:w-auto ${isOpen ? "block" : "hidden"}`}
     >
       <div className="text-sm md:flex-grow">
        {
            Links.map((item, index) => (
                <a key={index} href={item.link} className="block mt-4 md:inline-block md:mt-0 text-white-200 mr-4">
                    {item.name}
                </a>
            ))
        }
         
         
       </div>
     </div>
   </nav>
 );
}
export default App;